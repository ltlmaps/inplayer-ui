function uiColors(color, theme) {
  if (theme) {
    return theme.colors[color];
  }
  return props => props.theme.colors[color];
}

export default uiColors;
