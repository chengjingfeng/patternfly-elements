# pfe-tabs

A tabs element for keeping tabs on your tabs.

## Attributes

| Attribute        | Type                |
|------------------|---------------------|
| `on`             | `"Light" \| "Dark"` |
| `pfe-variant`    | `any`               |
| `selected-index` | `string`            |
| `vertical`       | `boolean`           |

## Properties

| Property        | Type  |
|-----------------|-------|
| `selectedIndex` | `any` |


# pfe-tab

A tab element for tabbing.

## Attributes

| Attribute       | Type  |
|-----------------|-------|
| `aria-selected` | `any` |

## Properties

| Property   | Type      |
|------------|-----------|
| `pfeId`    | `any`     |
| `selected` | `boolean` |
| `value`    | `0 \| -1` |

## CSS Custom Properties

| Property                         | Description                                      |
|----------------------------------|--------------------------------------------------|
| `--pfe-*`                        | this element supports [PatternFly Elements theme properties](#link-to-theme-props) |
| `--pfe-tabs--aux`                | the auxillary (foreground) color for this element |
| `--pfe-tabs--main`               | the main (background) color for this element     |
| `--pfe-tabs__tab--TextTransform` | any `text-transform` properties to apply to this element |


# pfe-tab-panel

A tab panel elemenent for putting things into.

## Properties

| Property | Type  |
|----------|-------|
| `pfeId`  | `any` |

## CSS Custom Properties

| Property                         | Description                                      |
|----------------------------------|--------------------------------------------------|
| `--pfe-*`                        | this element supports [PatternFly Elements theme properties](#link-to-theme-props) |
| `--pfe-tabs--aux`                | the auxillary (foreground) color for this element |
| `--pfe-tabs--main`               | the main (background) color for this element     |
| `--pfe-tabs__tab--TextTransform` | any `text-transform` properties to apply to this element |