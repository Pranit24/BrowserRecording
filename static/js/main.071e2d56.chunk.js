(this.webpackJsonprecord=this.webpackJsonprecord||[]).push([[0],{139:function(e,t,a){e.exports=a(303)},144:function(e,t,a){},146:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(6),i=a.n(o),s=(a(144),a(16)),c=a.n(s),l=a(42),d=a(121),u=a(122),p=a(135),m=a(123),g=a(136),f=(a(146),a(306)),h=a(308),v=a(309),E=a(305),y=a(10);a(147);var b=a(124),w=a.n(b),S={encoderWorkerFactory:function(){return new Worker("/BrowserRecording/opus-media-recorder/encoderWorker.umd.js")},OggOpusEncoderWasmPath:"/BrowserRecording/opus-media-recorder/OggOpusEncoder.wasm",WebMOpusEncoderWasmPath:"/BrowserRecording/opus-media-recorder/WebMOpusEncoder.wasm"},k=a(162),R=!!(navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia),F=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).uploadProps={name:"audio",accept:".opus",beforeUpload:function(e){console.log(e),a.setState({data:e,url:URL.createObjectURL(e),file:!1})}},a.componentDidMount=function(){if(R){a.requestUserMedia(),a.state.audio.addEventListener("ended",(function(){a.stopAudio()}));a.state.audio.addEventListener("loadeddata",(function(){!function(e){console.log(e),a.setState({duration:e})}(this.duration)}))}else alert("Browser not supported")},a.requestUserMedia=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("requestUserMedia"),e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({audio:!0});case 4:window.MediaRecorder=w.a,a.setState({micEnabled:!0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Enable microphone and refresh "+e.t0),a.setState({micEnabled:!1});case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),a.startRecording=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.requestUserMedia(),a.state.playFlag||a.stopAudio(),a.setState((function(e){return{recordFlag:!e.recordFlag,playFlag:!0,data:null}})),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){a.recorder=new MediaRecorder(e,{mimeType:"audio/ogg; codecs=opus"},S),a.setState({state:"in"}),a.recorder.start(),a.recorder.addEventListener("dataavailable",(function(e){console.log("Recording stopped, data available"),a.onDataAvailable(e)})),a.recorder.addEventListener("start",(function(e){console.log("start"),a.setState({state:"recording"})})),a.recorder.addEventListener("stop",(function(e){console.log("stop"),a.setState({state:"in"})})),a.recorder.addEventListener("pause",(function(e){console.log("pause"),a.setState({state:"paused"})})),a.recorder.addEventListener("resume",(function(e){console.log("resume"),a.setState({state:"recording"})})),a.recorder.addEventListener("error",(function(e){console.log("error")}))}));case 4:case"end":return e.stop()}}),e)}))),a.onDataAvailable=function(e){a.setState({data:e.data}),a.setState({url:URL.createObjectURL(a.state.data)});var t=a.state.audio;t.src=a.state.url,a.setState({audio:t})},a.stopRecording=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.requestUserMedia(),a.setState((function(e){return{recordFlag:!e.recordFlag,file:!e.file}})),a.recorder.stop();case 3:case"end":return e.stop()}}),e)}))),a.playAudio=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState((function(e){return{playFlag:!e.playFlag}})),(t=a.state.audio).src=a.state.url,t.play(),a.setState({audio:t});case 5:case"end":return e.stop()}}),e)}))),a.stopAudio=function(){a.setState((function(e){return{playFlag:!e.playFlag}}));var e=a.state.audio;e.pause(),e.currentTime=0,a.setState({audio:e})},a.saveAudio=function(){k.saveAs(a.state.data,"audio.opus")},a.state={recordAudio:null,src:null,url:null,data:null,micEnabled:!1,recordFlag:!0,playFlag:!0,audio:new Audio,file:!1},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,a;return t=this.state.micEnabled?this.state.recordFlag?n.a.createElement(f.a,{type:"primary",size:"large",onClick:this.startRecording,style:{marginBottom:"20px"}},"Start Recording"):n.a.createElement(f.a,{type:"primary",size:"large",onClick:this.stopRecording,style:{marginBottom:"20px"}},"Stop Recording"):n.a.createElement(f.a,{type:"secondary",size:"large",onClick:this.startRecording,disabled:!0,style:{marginBottom:"20px"}},"Start Recording"),this.state.data&&this.state.recordFlag&&this.state.playFlag?e=n.a.createElement(f.a,{type:"primary",size:"large",onClick:this.playAudio},"Play ",this.state.duration,"s Audio"):this.state.data&&this.state.recordFlag&&!this.state.playFlag&&(e=n.a.createElement(f.a,{type:"danger",size:"large",onClick:this.stopAudio},"Stop Playing Audio")),this.state.file&&(a=n.a.createElement(f.a,{type:"primary",size:"large",onClick:this.saveAudio},"Save Audio")),n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement("h1",null,"Browser Recorder"),n.a.createElement("p",null,n.a.createElement("sub",null,"Tested in Chrome, Firefox and Safari")),n.a.createElement("p",null,"This is a simple web application used to record audio using your microphone and play it back or save it to your local machine"),n.a.createElement("p",null,"GitHub Link:",n.a.createElement("a",{href:"https://github.com/Pranit24/BrowserRecording"},"https://github.com/Pranit24/BrowserRecording"))),n.a.createElement(h.a,{style:{marginTop:"50px"}},n.a.createElement(v.a,{span:24},t)),n.a.createElement(h.a,null,n.a.createElement(v.a,{span:8},e),n.a.createElement(v.a,{span:8},a),n.a.createElement(v.a,{span:8},n.a.createElement(E.a,this.uploadProps,n.a.createElement(f.a,null,n.a.createElement(y.a,{type:"upload"})," Click to Upload")))),n.a.createElement("br",null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(302);i.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.071e2d56.chunk.js.map