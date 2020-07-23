module.exports = ({ env }) => {
  return {
    email: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env(
          "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"
        ),
      },
      settings: {
        defaultFrom: "paulbocuse@strapi.io",
        defaultReplyTo: "ramprit550@gmail.com",
      },
    },
  };
};
