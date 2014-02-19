* Drag and drop Patch image form
* Click to expand patch image (show)
--- Put milimiters width and height at patch form
--- Change Quantity to in_stock
* Put form remote on Patch with upload feedback
* Add Bastidor
--- Add pagination
* Add Different "per page" options
* Add Gridview option to patch index
* Add settings scaffold
* Add authentication
--- Add "Create and Continue"
* Add quantity_per_bastidor
--- Add validations on Patch for Name and Code
* Calculate the cost based on price per 1000 dots
--- Add order by code DESC on Patch index
--- Make the confirm messages more meaningful
--- Add uniqueness to patch code
--- Always save code in upper case
* Add numerical validations (greater than 0, integer, etc)
* Review image upload...
* Add act_as_taggable
* Add "create and continue" EXCEPT for edit