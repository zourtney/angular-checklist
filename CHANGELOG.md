1.0.0
-----

*2017-01-18*

Initial commit


1.0.1
-----

*2017-01-19*

- Fixed module exposure (using `ngc`)
- Removed unnecessary `ElementRef` inclusion


1.0.2
-----

*2017-01-19*

- Compile with `ngc` on NPM `prepublish` hook


1.1.0
-----

*2017-01-31*

- **BREAKING CHANGE:** renamed module to `ChecklistModule`


1.2.0
-----

*2017-04-27*

- Updated depedencies. Now requires Angular 4.0+.


1.2.1
-----

*2017-05-11*

- Properly include JS files and exclude TS files on build. See #1.


1.2.2
-----

*2017-05-20*

- use `commonjs` module output


1.2.3
-----

*2017-08-29*

- Null-safe check for internal `isChecked` flag


1.3.0
-----

- Allow falsy input (Pull #5)
- `maxSelectedItems` (Pull #6)


1.4.0
-----

- Rebuild for Angular Ivy compatibility

1.5.0
-----

- Upgrade to Angular 11
- Migration from TSLint + codelyzer to angular-eslint
