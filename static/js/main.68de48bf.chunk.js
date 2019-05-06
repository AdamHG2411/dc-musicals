(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),r=a.n(c),o=(a(15),a(2)),i=a(3),l=a(5),p=a(4),u=a(1),m=a(6),d=(a(16),a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("ListItem: handleClick");var t=this.props.performance;this.props.updateSelection(t)}},{key:"render",value:function(){return console.log("ListItem: render"),s.a.createElement("button",{className:"ListItem-Button",onClick:this.handleClick},s.a.createElement("p",null,this.props.performance.musicalName),s.a.createElement("p",null,this.props.performance.venueName),s.a.createElement("p",{className:"ListItem-Dates"},"".concat(this.props.performance.dates.start.slice(5,7),"/").concat(this.props.performance.dates.start.slice(8,10)," - ").concat(this.props.performance.dates.end.slice(5,7),"/").concat(this.props.performance.dates.end.slice(8,10))))}}]),t}(n.Component)),h=(a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={dataLoaded:!1},a.componentDidMount=a.componentDidMount.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("List: render"),this.props.listedPerformances?s.a.createElement("div",{className:"List"},this.props.listedPerformances.map(function(t){return s.a.createElement(d,Object.assign({},t,{updateSelection:e.props.updateSelection}))})):(console.log("data not loaded"),null)}},{key:"componentDidMount",value:function(){if(console.log("List: componentDidMount"),0===this.props.listedPerformances.length||void 0===this.props.listedPerformances)return null;this.setState({dataLoaded:!0})}}]),t}(n.Component)),f=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).render=a.render.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(console.log("Venue: render"),this.props.venueData){var e=this.props.venueData.name?this.props.venueData.name:"error",t=this.props.venueData.location.street?this.props.venueData.location.street:"error",a=this.props.venueData.location.city?this.props.venueData.location.city:"error",n=this.props.selection.tickets.min?this.props.selection.tickets.min:"error",c=this.props.selection.tickets.max?this.props.selection.tickets.max:"error",r=this.props.selection.tickets.buy?this.props.selection.tickets.buy:"error";return s.a.createElement("div",{className:"Venue"},s.a.createElement("div",{className:"Venue-Info"},s.a.createElement("p",{className:"Venue-Name"},e),s.a.createElement("p",null,t),s.a.createElement("p",null,a)),s.a.createElement("div",{className:"Venue-Tickets"},s.a.createElement("p",{className:"Venue-TicketCost"},"Approx. $",n," - $",c),s.a.createElement("a",{className:"Venue-GetTickets",href:"".concat(r)},"Get Tickets")))}return null}}]),t}(n.Component)),v=(a(20),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).render=a.render.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("Musical: render"),this.props.musicalData?s.a.createElement("div",null,s.a.createElement("div",{className:"Musical"},s.a.createElement("p",{className:"Musical-Name"},this.props.musicalData.name," (",this.props.musicalData.premiereYear,")"),s.a.createElement("p",{className:"Musical-Composer"},this.props.musicalData.composer),s.a.createElement("p",{className:"Musical-Wikipedia"},s.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Into_the_Woods"},"Learn More"))),s.a.createElement("div",null,s.a.createElement("h2",null,"Tracklist"),s.a.createElement("iframe",{title:"SpotifyPlayer",src:"https://open.spotify.com/embed/album/".concat(this.props.musicalData.spotifyURL),width:"380",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}))):null}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={performanceData:null,performanceDataLoaded:!1,sortedData:null,listedPerformances:[],selection:null,venueData:null,musicalData:null},a.render=a.render.bind(Object(u.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(u.a)(a)),a.updateSelection=a.updateSelection.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateSelection",value:function(e){var t=this;this.setState({selection:e}),fetch("https://musicals-api.herokuapp.com/api/venues/".concat(e.venueCode)).then(function(a){a.json().then(function(a){fetch("https://musicals-api.herokuapp.com/api/musicals/".concat(e.musicalName)).then(function(e){e.json().then(function(e){t.setState({venueData:a,musicalData:e})})})})})}},{key:"render",value:function(){return console.log("App: render"),s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"App-Header"},"DC Musicals"),s.a.createElement("div",{className:"App-Body"},s.a.createElement("div",{className:"App-UpcomingList"},s.a.createElement("h2",null,"Upcoming Performances"),s.a.createElement(h,{listedPerformances:this.state.listedPerformances,className:"App-PerformanceList",updateSelection:this.updateSelection})),s.a.createElement("div",{className:"App-SelectedPerformance"},s.a.createElement("h2",null,"Venue"),s.a.createElement(f,{className:"App-SelectedVenue",venueData:this.state.venueData,musicalData:this.state.musicalData,selection:this.state.selection}),s.a.createElement("h2",null,"Musical"),s.a.createElement(v,{className:"App-SelectedMusical",musicalData:this.state.musicalData}))))}},{key:"componentDidMount",value:function(){var e=this;console.log("App: componentDidMount"),fetch("https://musicals-api.herokuapp.com/api/performances/").then(function(e){return e.json()}).then(function(t){e.setState({performanceData:t})}).then(function(){if(e.state.performanceData){e.setState({sortedData:e.state.performanceData.sort(function(e,t){var a=new Date(e.dates.start),n=new Date(t.dates.start);return a<n?-1:a>n?1:0})});for(var t=0;t<e.state.sortedData.length;t++)e.state.listedPerformances.push({performance:e.state.sortedData[t],key:t});e.setState({performanceDataLoaded:!0})}})}}]),t}(n.Component);r.a.render(s.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.68de48bf.chunk.js.map