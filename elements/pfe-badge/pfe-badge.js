import e from"../pfelement/pfelement.js";class o extends e{get html(){return'<style>:host {\n  --pfe-badge--base--bg:           var(--pfe-theme--color--feedback--default--lightest, #ececec);\n  --pfe-badge--base--color:                               var(--pfe-theme--color--text, #333);\n  --pfe-badge--base--font-size:                        var(--pfe-theme--font-size, 16px);\n  display: inline-block;\n  padding: 0.35rem 0.8rem;\n  border: 1px solid transparent;\n  border-radius: 20px !important;\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important;\n  font-size: calc(var(--pfe-badge--base--font-size) * 0.8);\n  font-weight: var(--pfe-theme--font-weight--bold, 700);\n  line-height: 1.1; }\n  :host ::slotted(*) {\n    display: inline-block;\n    border-radius: 20px !important;\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important;\n    vertical-align: middle; }\n\n:host([size="sm"]) {\n  padding: 0.3rem 0.7rem;\n  font-size: calc(var(--pfe-badge--base--font-size) * 0.7);\n  font-weight: var(--pfe-theme--font-weight--bold, 700); }\n\n:host([size="md"]) {\n  padding: 0.35rem 0.8rem;\n  font-size: calc(var(--pfe-badge--base--font-size) * 0.8); }\n\n:host([size="lg"]) {\n  padding: 0.4rem 0.85rem;\n  font-size: calc(var(--pfe-badge--base--font-size) * .9);\n  line-height: 1.2; }\n\n:host([color="white"]) {\n  --pfe-badge--base--bg:                     var(--pfe-theme--color--feedback--default, #606060);\n  --pfe-badge--base--color:                               var(--pfe-theme--color--text, #333);\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important; }\n  :host([color="white"]) ::slotted(*) {\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important; }\n\n:host([color="grey"]),\n:host([color="gray"]),\n:host([priority="default"]) {\n  --pfe-badge--base--bg:                     var(--pfe-theme--color--feedback--default, #606060);\n  --pfe-badge--base--color:                               var(--pfe-theme--color--text, #333);\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important; }\n  :host([color="grey"]) ::slotted(*),\n  :host([color="gray"]) ::slotted(*),\n  :host([priority="default"]) ::slotted(*) {\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important; }\n\n:host([color="slate"]),\n:host([priority="normal"]) {\n  --pfe-badge--base--bg:            var(--pfe-theme--color--feedback--default--darkest, #464646);\n  --pfe-badge--base--color:                      var(--pfe-theme--color--text--on-dark, #fff);\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important;\n  font-weight: var(--pfe-theme--font-weight--semi-bold, 600); }\n  :host([color="slate"]) ::slotted(*),\n  :host([priority="normal"]) ::slotted(*) {\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important; }\n\n:host([color="blue"]),\n:host([priority="info"]) {\n  --pfe-badge--base--bg:                       var(--pfe-theme--color--feedback--info, #0277bd);\n  --pfe-badge--base--color:                     var(--pfe-theme--color--text--on-dark, #fff);\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important;\n  font-weight: var(--pfe-theme--font-weight--semi-bold, 600); }\n  :host([color="blue"]) ::slotted(*),\n  :host([priority="info"]) ::slotted(*) {\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important; }\n\n:host([color="green"]),\n:host([priority="success"]) {\n  --pfe-badge--base--bg:                    var(--pfe-theme--color--feedback--success, #2e7d32);\n  --pfe-badge--base--color:                     var(--pfe-theme--color--text--on-dark, #fff);\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important;\n  font-weight: var(--pfe-theme--font-weight--semi-bold, 600); }\n  :host([color="green"]) ::slotted(*),\n  :host([priority="success"]) ::slotted(*) {\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important; }\n\n:host([color="orange"]),\n:host([priority="warning"]) {\n  --pfe-badge--base--bg:                  var(--pfe-theme--color--feedback--important, #d73401);\n  --pfe-badge--base--color:                     var(--pfe-theme--color--text--on-dark, #fff);\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important;\n  font-weight: var(--pfe-theme--font-weight--semi-bold, 600); }\n  :host([color="orange"]) ::slotted(*),\n  :host([priority="warning"]) ::slotted(*) {\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important; }\n\n:host([color="red"]),\n:host([priority="critical"]) {\n  --pfe-badge--base--bg:                   var(--pfe-theme--color--feedback--critical, #990000);\n  --pfe-badge--base--color:                     var(--pfe-theme--color--text--on-dark, #fff);\n  background-color: var(--pfe-badge--base--bg) !important;\n  color: var(--pfe-badge--base--color) !important;\n  font-weight: var(--pfe-theme--font-weight--semi-bold, 600); }\n  :host([color="red"]) ::slotted(*),\n  :host([priority="critical"]) ::slotted(*) {\n    background-color: var(--pfe-badge--base--bg) !important;\n    color: var(--pfe-badge--base--color) !important; }\n\n:host([hidden]) {\n  display: none; }</style>\n<slot></slot>'}static get tag(){return"pfe-badge"}get templateUrl(){return"pfe-badge.html"}get styleUrl(){return"pfe-badge.scss"}constructor(){super(o)}}e.create(o);export default o;
//# sourceMappingURL=pfe-badge.js.map
