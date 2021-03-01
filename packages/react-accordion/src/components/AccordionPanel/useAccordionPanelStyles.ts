import { makeStyles, ax } from '@fluentui/react-make-styles';
import { AccordionPanelState } from './AccordionPanel.types';

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles<AccordionPanelState>([]);

/** Applies style classnames to slots */
export const useAccordionPanelStyles = (state: AccordionPanelState) => {
  const rootClassName = useRootStyles(state);

  state.className = ax(rootClassName, state.className);

  return state;
};