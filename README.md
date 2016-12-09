# Google Analytics Scroll Depth Tracking Plugin
Fork of Chris Goddard's lightweight Google Analytics scroll tracking plugin extended with accuracy settings.

**Please note that in the latest commit the values of Event, Label and Value have been modified to suit a very specific need. Be very aware what you're doing!"

## Usage
```javascript
  ga('create', 'UA-XXXXXXXX-1', 'auto');
  ga('send', 'pageview');

  var config = {accuracy: 5};

  ga('require', 'scrollDepthTracker', './scroll-depth-tracker.js', config);
```
In this example the we update the scroll depth in 5% steps. **Accuracy defaults to 1, though.**


See [SERPs blog post](https://serps.com/blog/building-a-better-scroll-depth-tracking-plugin-google-analytics/?utm_source=github&utm_medium=readme&utm_campaign=GitHub%20Public%20Repos
) for the original versions usage.
