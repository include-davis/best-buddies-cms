'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
      strapi.db.lifecycles.subscribe(async (event) => {
        const listen_models = [
            "events", 
            "announcements", 
            "current-members", 
            "homepage", 
            "members", 
            "newsletters", 
            "events-regional-state"
        ]

        const listen_actions = [
            "afterUpdate",
            "afterDelete",
        ]

        const model = event.model.collectionName;
        const action = event.action;

        if (listen_models.includes(model) && listen_actions.includes(action)) {
            await fetch(`https://staging.ucdbestbuddies.org/api/revalidate`)
            await fetch(`https://ucdbestbuddies.org/api/revalidate`)
        }
      });
    },
};
