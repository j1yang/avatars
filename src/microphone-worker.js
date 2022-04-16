import microphoneWorklet from './microphone-worklet.js?raw';

class MicrophoneWorker extends EventTarget {
  constructor(mediaStream, options = {}) {
    super();

    const audio = document.createElement('audio');
    audio.srcObject = mediaStream;
    audio.muted = true;
    this.audioContext = new AudioContext();
    const mediaStreamSource = this.audioContext.createMediaStreamSource(mediaStream);

    this.audioContext.audioWorklet.addModule(options.microphoneWorkletUrl || `data:application/javascript;charset=utf8,${encodeURIComponent(microphoneWorklet)}`)
      .then(() => {
        const audioWorkletNode = new AudioWorkletNode(this.audioContext, 'volume-processor');
        if (options.muted === false) {
          audioWorkletNode.port.postMessage(JSON.stringify({
            method: 'muted',
            muted: false,
          }));
        }
        audioWorkletNode.port.onmessage = e => {
          this.dispatchEvent(new MessageEvent('volume', {
            data: e.data,
          }));
        };
        mediaStreamSource.connect(audioWorkletNode).connect(this.audioContext.destination);
      });
  }
  close() {
    this.audioContext.close();
  }
}
export default MicrophoneWorker;