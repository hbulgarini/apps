// Copyright 2017-2024 @polkadot/app-explorer authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TabItem } from '@polkadot/react-components/types';

import React, { useRef } from 'react';

import { Tabs } from '@polkadot/react-components';

import { useTranslation } from './translate.js';
import Overview from './Overview/index.js';
import useWorkloadInfos from './useWorkloadInfos.js';
import useWorkplanInfos from './useWorkplanInfos.js';

interface Props {
  basePath: string;
  className?: string;
}

function createItemsRef(t: (key: string, options?: { replace: Record<string, unknown> }) => string): TabItem[] {
  console.log('creation')
  return [
    {
      isRoot: true,
      name: 'overview',
      text: t('Overview')
    }
  ];
}

function CoretimeApp({ basePath, className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const itemsRef = useRef(createItemsRef(t));
  const workloadInfos = useWorkloadInfos();
  const workplanInfos = useWorkplanInfos();

  return (
    <main className={className}>
      <Tabs
        basePath={basePath}
        items={itemsRef.current}
      />
      <Overview workloadInfos={workloadInfos}
        workplanInfos={workplanInfos} />
    </main>
  );
}

export default React.memo(CoretimeApp);
