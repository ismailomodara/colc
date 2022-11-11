<template>
  <div></div>
</template>

<script>
export default {
  name: "AuthXWidget",
  data() {
    return {
      scriptLoaded: null,
    };
  },
  beforeMount() {
    this.scriptLoaded = new Promise((resolve) => {
      this.loadScript(this.loadAuthX);
      resolve();
    });
  },

  methods: {
    loadScript(callback) {
      const script = document.createElement("script");
      script.src = "https://staging-ajs.radius.africa/authx.js";

      document.getElementsByTagName("head")[0].appendChild(script);

      if (script.readyState) {
        // IE
        script.onreadystatechange = () => {
          if (
            script.readyState === "loaded" ||
            script.readyState === "complete"
          ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        // Others
        script.onload = () => {
          callback();
        };
      }
    },

    loadAuthX() {
      const loginHandler = (session, message) => {
        console.log("logged in ", session, message);
        console.log("Session = ", authx.getSession());
      };

      this.scriptLoaded &&
        this.scriptLoaded.then(() => {
          const authx = AuthX("Wn9PZ3NcYMWRlWyf78Aovdok95vahmE3Sp6Js1Tp", {
            redirect_uri: "http://localhost:3000/redirect",
            locale: "en",
            isSpa: true,
            onComplete: loginHandler,
            onError: function (error) {
              alert(error.message);
            },
          });

          window["authx"] = authx;
        });
    },
  },
};
</script>
