import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkLinkButton extends Schema.Component {
  collectionName: 'components_link_link_buttons';
  info: {
    displayName: 'link_button';
    icon: 'attachment';
  };
  attributes: {
    display_text: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.link-button': LinkLinkButton;
    }
  }
}
