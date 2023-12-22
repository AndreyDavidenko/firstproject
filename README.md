# firstproject

To start wotk enter this code on the console:

// To install dependencies enter this code after first start:
npm install

// To start dev-server for wotk enter this code:
npm start

// To commit changes:
git commit -am 'rels #i4. commitmessage'

// To push changes:
git push

To start linter and prettier autofixes create file .vscode/settings.json in project. Paste this code in it:
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.autoSaveDelay": 100,
  "screencastMode.fontSize": 90,
  "editor.accessibilityPageSize": 20,
  "editor.autoClosingQuotes": "always",
  "editor.autoClosingBrackets": "always",
  "editor.formatOnPaste": true,
  "editor.fontSize": 14,
  "html.autoClosingTags": false,
  "html.completion.attributeDefaultValue": "empty",
  "typescript.autoClosingTags": false,
  "typescript.preferences.jsxAttributeCompletionStyle": "none",
  "html.format.enable": true,
  "files.exclude": {
    "**/node_modules": true
  },
  "eslint.validate": ["graphql", "typescript", "typescriptreact"]
}

