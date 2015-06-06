![downloads](https://img.shields.io/npm/dm/jquery.tablecheckbox.svg)
![release](https://img.shields.io/github/release/kerwitz/jquery.tablecheckbox.svg)
![bower](https://img.shields.io/bower/v/jquery.tablecheckbox.svg)
![npm](https://img.shields.io/npm/v/jquery.tablecheckbox.svg)
![license](https://img.shields.io/github/license/kerwitz/jquery.tablecheckbox.svg)

# jquery.tablecheckbox
A jQuery plugin that lets you easily enhance data tables with selectable rows.

[Demo](http://kerwitz.github.io/jquery.tablecheckbox)

## Installation
You have a couple of options here:

  1. Grab the latest release from Github
  2. Install using bower:

          bower install jquery.tablecheckbox
  3. Install using npm:

          npm install jquery.tablecheckbox

## Features

- Translates clicks on rows to their checkbox
- Supports master checkbox in the table header
- Supports selection of multiple rows by holding down the shift key
- No mess with text selections without the need to disable them.
  The Plugin avoids getting in the way of the user if he wants to select / deselect text and tries to be smart about unwanted selections when selecting rows.

## Usage

    <table>
        <thead>
            <th><input type="checkbox"></th>
            <th>Name</th>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox"></td>  
                <td>First item</td>
            </tr>
            <tr>
                <td><input type="checkbox"></td>  
                <td>First item</td>
            </tr>
        </tbody>
    </table>
    <script>$('table').tablecheckbox();</script>

You may use this plugin with other markup structures or ways of input.
Use the options below to make it fit your use case.



## Options

    $('table').tablecheckbox({ /* options */ });

### selectedRowClass

Default: `warning` to comply with Bootstrap.

This class will be applied to any table row that is selected.

### checkboxSelector

Default: `td:first-of-type input[type="checkbox"],th:first-of-type input[type="checkbox"]`

The jQuery selector used to find the checkboxes in the table.

### isChecked()

Default:

    function($checkbox) {
        return $checkbox.is(':checked');
    }

The function used to determine wether a checkbox is checked or not.

## License
MIT, Copyright (c) 2015, Marco Kerwitz (https://www.kerwitz.com)
