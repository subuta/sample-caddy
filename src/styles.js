import FreeStyle from 'free-style';

// Create a container instance.
var Style = FreeStyle.create();

// Register a new, uniquely hashed style.
var STYLE = Style.registerStyle({
  backgroundColor: 'blue'
});

// Inject a `<style />` element into the `<head>`.
Style.inject();

export default STYLE;
