// Copyright 2017-2020 @canvas-ui/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import Collection, { CollectionProps as Props, CollectionState as State, collectionStyles } from './Collection';

import translate from './translate';

class Column extends Collection<Props, State> {
  public render (): React.ReactNode {
    const { className = '' } = this.props;
    const { isEmpty } = this.state;

    return (
      <div className={`ui--Column ${className}`}>
        {this.renderHeader()}
        {isEmpty && this.renderEmpty()}
        {this.renderCollection()}
      </div>
    );
  }

  public renderCollection (): React.ReactNode {
    const { children } = this.props;

    return children;
  }
}

export default translate(
  styled(Column as React.ComponentClass<Props, State>)`
    ${collectionStyles}

    box-sizing: border-box;
    max-width: 100%;
    flex: 1 1;
    margin: 0;
    padding: 0 0.5rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    .container {
      margin: 0;
      padding: 0;

      article {
        border: none;
        margin: 0;
      }

      article+article {
        border-top: 1px solid #f2f2f2;
      }
    }

    @media (min-width: 1025px) {
      max-width: 50%;
      min-width: 50%;
    }
  `
);
