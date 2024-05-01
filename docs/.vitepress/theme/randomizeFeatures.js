export default {
    async enhanceApp({ app }) {
      app.mixin({
        mounted() {
          this.randomizeFeatures();
        },
        methods: {
          randomizeFeatures() {
            const featuresList = document.querySelector('.features');
            if (featuresList) {
              const features = Array.from(featuresList.children);
              features.sort(() => Math.random() - 0.5);
              features.forEach(feature => {
                featuresList.appendChild(feature);
              });
            }
          }
        }
      });
    }
  };
  