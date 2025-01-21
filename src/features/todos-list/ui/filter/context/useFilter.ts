import { useContext } from 'react';

import { FilterContext } from './FilterContext.ts';

export const useFilter = () => useContext(FilterContext);
