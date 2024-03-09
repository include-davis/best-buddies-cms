'use strict';

/**
 * current-members service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-members.current-members');
