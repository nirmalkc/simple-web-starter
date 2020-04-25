# Helpers

Apply spacers using either for DIV or SPAN tags.
For padding use "in", and for margins use "out" as the naming convention for the CSS selectors.
For Sizes: "sm", "base", "md", "lg" and "none"

### Usage of helpers

| Size | Description |
| ------ | ------ |
| xs | Extra Small |
| sm | Small |
| nm | Normal |
| md | Medium |
| lg | Large |
| xl | Extra Large |
| xxl | Double Extra Large |
| none | No spacer |


Example for Padding - all sides:
```sh
<div class="spacer-in-sm"></div> # Small
<div class="spacer-in-base"></div> # Normal
<div class="spacer-in-md"></div> # Medium
<div class="spacer-in-lg"></div> # Large
<div class="spacer-in-none"></div> # No padding
```

Margin - all sides (Does not work with <span> tags):
```sh
<div class="spacer-out-sm"></div> - Small
<div class="spacer-out-base"></div> - Normal
<div class="spacer-out-md"></div> - Medium
<div class="spacer-out-lg"></div> - Large
<div class="spacer-out-none"></div> - No margin
```
Vertical Padding:
```sh
<div class="spacer-in-v-sm"></div> - Small
<div class="spacer-in-v-base"></div> - Normal
<div class="spacer-in-v-md"></div> - Medium
<div class="spacer-in-v-lg"></div> - Large
<div class="spacer-in-v-none"></div> - No padding for top and bottom
```
Horizontal Margin:
```sh
<div class="spacer-out-h-sm"></div> - Small
<div class="spacer-out-h-base"></div> - Normal
<div class="spacer-out-h-md"></div> - Medium
<div class="spacer-out-h-lg"></div> - Large
<div class="spacer-out-h-none"></div> - No margin for left and right side
```
Margin or padding for specific side:
```sh
<div class="spacer-out-top-sm"></div> - Small margin at the top
<div class="spacer-in-bottom-lg"></div> - Large padding at the bottom
```