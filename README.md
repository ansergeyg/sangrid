# Simple grid data structure to play with.

Declare the script library:

```html
<script src="dist/sangrid.js"></script>
```

Put a canvas on a page:

```html
<canvas id="tutorial" width="850" height="850"></canvas>
```

Use options to configure the grid.

```html
    <script>
        let config = {
            'canvasId': 'tutorial',
            'width': 100,
            'height': 200,
            'cellCount': 30,
            'cellSize': 20,
            'sepDist':1,
        };
        sangrid.init(config);
    </script>
```