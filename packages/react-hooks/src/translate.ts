// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useTranslation as useTranslationBase, withTranslation } from 'react-i18next';

export function useTranslation (): { t: (key: string, options?: { replace: Record<string, unknown> }) => string } {
  return useTranslationBase('react-hooks');
}

export default withTranslation(['react-hooks']);
