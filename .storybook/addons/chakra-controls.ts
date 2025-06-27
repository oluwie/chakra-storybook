import { useEffect } from 'react';
import { useArgs, useArgTypes } from '@storybook/manager-api';
import { STORY_RENDERED } from '@storybook/core-events';

// Common Chakra UI style props with their control types
const CHAKRA_STYLE_PROPS = {
  // Margin & Padding
  m: { control: 'text', description: 'Margin (all sides)' },
  mt: { control: 'text', description: 'Margin top' },
  mr: { control: 'text', description: 'Margin right' },
  mb: { control: 'text', description: 'Margin bottom' },
  ml: { control: 'text', description: 'Margin left' },
  mx: { control: 'text', description: 'Margin horizontal' },
  my: { control: 'text', description: 'Margin vertical' },
  p: { control: 'text', description: 'Padding (all sides)' },
  pt: { control: 'text', description: 'Padding top' },
  pr: { control: 'text', description: 'Padding right' },
  pb: { control: 'text', description: 'Padding bottom' },
  pl: { control: 'text', description: 'Padding left' },
  px: { control: 'text', description: 'Padding horizontal' },
  py: { control: 'text', description: 'Padding vertical' },
  
  // Colors
  bg: { control: 'color', description: 'Background color' },
  backgroundColor: { control: 'color', description: 'Background color' },
  color: { control: 'color', description: 'Text color' },
  borderColor: { control: 'color', description: 'Border color' },
  
  // Layout
  w: { control: 'text', description: 'Width' },
  width: { control: 'text', description: 'Width' },
  h: { control: 'text', description: 'Height' },
  height: { control: 'text', description: 'Height' },
  minW: { control: 'text', description: 'Minimum width' },
  minWidth: { control: 'text', description: 'Minimum width' },
  maxW: { control: 'text', description: 'Maximum width' },
  maxWidth: { control: 'text', description: 'Maximum width' },
  minH: { control: 'text', description: 'Minimum height' },
  minHeight: { control: 'text', description: 'Minimum height' },
  maxH: { control: 'text', description: 'Maximum height' },
  maxHeight: { control: 'text', description: 'Maximum height' },
  
  // Display & Position
  display: { 
    control: 'select', 
    options: ['block', 'inline-block', 'inline', 'flex', 'grid', 'none'],
    description: 'Display type' 
  },
  position: { 
    control: 'select', 
    options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    description: 'Position type' 
  },
  top: { control: 'text', description: 'Top position' },
  right: { control: 'text', description: 'Right position' },
  bottom: { control: 'text', description: 'Bottom position' },
  left: { control: 'text', description: 'Left position' },
  zIndex: { control: 'number', description: 'Z-index' },
  
  // Flexbox
  alignItems: { 
    control: 'select', 
    options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    description: 'Align items' 
  },
  justifyContent: { 
    control: 'select', 
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    description: 'Justify content' 
  },
  flexDirection: { 
    control: 'select', 
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    description: 'Flex direction' 
  },
  flexWrap: { 
    control: 'select', 
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    description: 'Flex wrap' 
  },
  
  // Typography
  fontSize: { control: 'text', description: 'Font size' },
  fontWeight: { control: 'text', description: 'Font weight' },
  lineHeight: { control: 'text', description: 'Line height' },
  textAlign: { 
    control: 'select', 
    options: ['left', 'center', 'right', 'justify'],
    description: 'Text alignment' 
  },
  
  // Border & Border Radius
  border: { control: 'text', description: 'Border' },
  borderWidth: { control: 'text', description: 'Border width' },
  borderStyle: { 
    control: 'select', 
    options: ['solid', 'dashed', 'dotted', 'double', 'none'],
    description: 'Border style' 
  },
  borderRadius: { control: 'text', description: 'Border radius' },
  
  // Shadow & Opacity
  boxShadow: { control: 'text', description: 'Box shadow' },
  opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 }, description: 'Opacity' },
};

export const addChakraControls = (existingArgTypes: any = {}) => {
  return {
    ...CHAKRA_STYLE_PROPS,
    ...existingArgTypes, // Allow overrides
  };
};