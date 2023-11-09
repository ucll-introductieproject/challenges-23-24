# challenges-23-24

Open this folder in Visual Studio Code to easily work with the challenges.

We advise you to complete the challenges in their numbered order. Start with the introduction challenges and then the git challenges. Afterwards the order can be freely chosen.

## Getting Updates

It is a good idea to check for updates before you start working. 

To do so, update the challenges-23-24 folder (execute the command `git pull` from git bash in the folder), and copy the files over again if you see that there are changes.

## Working with markdown

Every challenge is presented as a _markdown_ file.

A markdown file is a text file that uses markup syntax to add formatting and structure to the text. It is often used to create documentation.
Throughout the challenges, we will be using markdown files to describe what needs to be completed. You can find a markdown file in each challenge folder.

You can view the source code of the markdown file by opening the file. By selecting the preview button you can view the compiled document.

### Open preview by default

Since you'll be reading markdown files instead of writing them most of the time it might be useful to change the default behaviour to preview mode.

Go to Settings -> Workbench -> Editor Associations. Select "Add Item" and add the value `vscode.markdown.preview.editor` for item `*.md`. 

Markdown files are now openend in preview instead of source code by default.

## Verifying your solution

Every challenge you submit will be checked by running the verify script. You can always run the verify script yourself to see if you have completed the challenge successfully. 

You should always run the verify script from the directory it is defined in!

There are two ways to do this:

* Start `git bash` and navigate to the folder of the challenge you are working in with the command `cd`. Run the python script from the command line afterwards.
* Run the script from VS Code. This will run the script from the folder VS code is openened in. Most of the time this will be the wrong folder! You can circumvent this by changing the folder in the terminal after running the script using `cd` and then running the script again.
