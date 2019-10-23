/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface InputBytestream {
    'checked': boolean;
    'classes': string;
    'location': string;
    'mediaType': string;
    'mtime': string;
    'name': string;
    'onChange': (event: object) => void;
    'size': number;
    'uuid': string;
  }
}

declare global {


  interface HTMLInputBytestreamElement extends Components.InputBytestream, HTMLStencilElement {}
  const HTMLInputBytestreamElement: {
    prototype: HTMLInputBytestreamElement;
    new (): HTMLInputBytestreamElement;
  };
  interface HTMLElementTagNameMap {
    'input-bytestream': HTMLInputBytestreamElement;
  }
}

declare namespace LocalJSX {
  interface InputBytestream {
    'checked'?: boolean;
    'classes'?: string;
    'location'?: string;
    'mediaType'?: string;
    'mtime'?: string;
    'name': string;
    'onChange'?: (event: object) => void;
    'size'?: number;
    'uuid'?: string;
  }

  interface IntrinsicElements {
    'input-bytestream': InputBytestream;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'input-bytestream': LocalJSX.InputBytestream & JSXBase.HTMLAttributes<HTMLInputBytestreamElement>;
    }
  }
}


