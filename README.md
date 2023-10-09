# React Text Manipulation Tools

React Text Manipulation Tools is a versatile and user-friendly toolkit designed to facilitate various text manipulation tasks. 
It provides a set of components each serving a unique text transformation or information extraction functionality with easy copy or save features.

## Features

- **Text Input Box**: A field to input the text data to be manipulated.
- **Text Output Box**: Displays the result of the selected text manipulation action.
- **Text Statistics**: Offers detailed statistics on the input text, such as character count, word count, and line count.
- **Copy to Clipboard**: Copies the output text to the clipboard for easy pasting elsewhere.
- **Save to Text File (TXT)**: Saves the output text as a `.txt` file.
- **Save to CSV File**: Saves the output text as a `.csv` file.
- **Text Options**:
  - **Join Lines**: Combines multiple lines of text into a single line.
  - **Uppercase**: Converts all characters in the text to uppercase.
  - **Lowercase**: Converts all characters in the text to lowercase.
  - **Base64 Encode & Decode**: Converts text to its Base64 encoded/decoded form.
  - **Extract Emails**: Extracts all email addresses found in the text.
  - **Extract URLs**: Extracts all URLs found in the text.
  - **JSON Formatter/Prettifier**: Formats JSON strings to be more readable.
  - **JSON Minifier**: Minifies JSON strings by removing unnecessary whitespace.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/DAVEALLCAPS/text-tools.git
   ```
2. Navigate into the project directory:
   ```sh
   cd text-tools
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Usage

Simply input the text you wish to manipulate into the Text Input Box, select the desired action from the Text Options, and observe the result in the Text Output Box. 
You can then copy, save as TXT, or save as CSV.

## Built With

- [React](https://reactjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
