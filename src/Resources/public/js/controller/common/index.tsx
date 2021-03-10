'use strict';

declare function define(...args: any[]): any;

import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

// @ts-ignore
define(['pim/controller/front', 'pim/form-builder'], function (BaseController, FormBuilder) {
  return BaseController.extend({

    initialize: function (options: object) {
      this.options = options;
    },

    /**
     * @inheritDoc
     */
    renderForm: function () {
      return FormBuilder.build(this.options.config.form_builder_name).then(() => {
        const htmlElement = this.$el.get(0);
        ReactDOM.render(<Component />, htmlElement);
      });
    },
  });
});
