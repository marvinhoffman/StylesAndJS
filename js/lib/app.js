/**
 * Created by mhoffman on 6/11/14.
 */

// app.js
angular.module("dd", [])
    .directive("ddDraggable", Draggable)
    .directive("ddDropTarget", DropTarget);