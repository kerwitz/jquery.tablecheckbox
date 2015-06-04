# jquery.tableCheckbox.js
A jQuery plugin that lets you easily enhance data tables with selectable rows.

## Installation
Grab the latest release from Github or install using bower:

    bower install jquery.tableCheckbox.js

## Usage

    $('table').tableCheckbox();

## Options

    $('table').tableCheckbox({ /* options */ })

### selectedRowClass

Default: `'warning'` to comply with Bootstrap.

This class will be applied to any table row that is selected.

### checkboxSelector

Default: `'td:first-of-type input[type="checkbox"],th:first-of-type input[type="checkbox"]'`

The jQuery selector used to find the checkboxes in the table.

### isChecked()

Default:

    function($checkbox) {
        return $checkbox.is(':checked');
    }

The function used to determine wether a checkbox is checked or not.
