<img align='left' src="https://user-images.githubusercontent.com/17935770/167260199-2edfda2a-475a-4cb7-8aa9-c787de97ba2b.png" alt="logo" width="150"/>
 
<div align='center'>
 
# Lettra
 
</div> 
 
> [Lettra](https://lettra.vercel.app) is a means for job seekers to reduce the time it takes to write a cover letter by selecting keywords to turn into variables, thus **effortlessly** changing _all_ occurrences of any words. 
<div align='right'>
 
 <sub>**_Application is currently in its alpha stage_**. </sub>

</div> 

## Features

<details>
  <summary>
   
   1. Wordiables - These are words that are variables!  <sup>**`click to expand`**</sup>
   
  </summary>

  > - Words in the document with `\ backslashes \` surrounding it will be a Wordiable.
  > - Up to seven Wordibles can be created, each with its assigned color.
  > - Colors are applied to each iteration of the word in the document.
 
</details>



<details>
  <summary>
   
   2. Wordiables Table - Easily see and change all of your Wordiables! <sup>**`click to expand`**</sup>
   
  </summary>

 > A table of the selected words will show the order in which the Wordibles first occur, how many times they appear on the document, and its associated color. Selecting a word from here will highlight the Wordiable from the document and allow you to update all occurrences at once.  <sub>_feature in progress!_</sub>    

</details>

<div align='center'>
 
## Wireframe

 
> Feel free to explore my wireframe and thoughts on [Figma](https://www.figma.com/file/gQ7y0NcZqBecv25aPrDzOI/Lettra?node-id=0%3A1)
 

![lettra](https://user-images.githubusercontent.com/17935770/165384152-b341c29a-24f2-437a-8f36-b065a66c115a.png)
 </div>


## Installation

You can visit [Lettra's website](https://lettra.vercel.app) or clone the repo.

1. Clone the repo and update the dependency with your preferred package manager. <sub>(*yarn, pnpm, etc.*)</sub>

    ```jsx
    git clone
    npm install
    ```

2. Run the development environment to start the server.

    ```jsx
    npm run dev
    ```

3. Once started, visit [localhost:3000](http://localhost:3000) on your browser.

## Usage

Insert your cover letter and then wrap backslashes (`\`) behind _and_ in front of the words you want to convert into a Wordiable.<sup>(word variable)</sup>

> **For example**: `Dear OmniBark Hirer,` should look like `Dear \OmniBark\ Hirer,`  

Do this to each word you would like to swap out for another easily, up to seven unique words.

Every iteration of `\OmniBark\` will now automatically have the corresponding color. The color will automatically change based on the order the Wordiables are seen within the document. <sup>(colors are ROYGBIV)</sup>

In the previous example, every iteration of `\OmniBark\` will turn red. If you were to add a new wordiable anywhere ahead of `\OmniBark\,` then all of the Wordiables will shift colors accordingly.

> **For Example**: `\Dear\ \OmniBark\ Hirer,`

In this example,`\Dear\`  (and any of the following iterations of the word) will turn red, and all instances of `OmniBark` will now be orange.

<!-- Not a feature yet: You only need to do this to the first iteration of the word seen in your document; then, every iteration afterward will become a **Wordiable** and can be manipulated all at once. -->

```
 Dear \OmniBark\ Hirer,
 I would love to work at \OmniBark\ because...
```
<!-- This is not a feature yet
Select OmniBark from the Wordiable Table, or edit the word without removing the `\` (in any order), which will update the appearances of all the other words that are the same. If you replace `\OmniBark\` with `\UniMeows\` will automatically change the document from

`Dear OmniBark Hirer, I would love to work at OmniBark because...`

to

`Dear UniMeow Hirer, I would love to work at UniMeow because...`

 all within the time it took for you to spell out `UniMeow` -->

## Roadmap

- Add localStorage always to have your most recent Cover Letter.
- Add "Paragraphiables" that will hold different variations of your CL.
  - Wordiables will be consistent in each stored paragraph to further increase the efficiency of creating versions of cover letters for when applying to companies with different core values or positions.
- Add 'auto-detect Wordiables' feature that will try and determine which words are the ones the job-seeker would've chosen manually.


<div align='center'>

## Technologies


<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square" alt="React Badge">
<img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat-square" alt="Next.js Badge">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" alt="JavaScript Badge">
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat-square" alt="HTML5 Badge">
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square" alt="CSS3 Badge">
<img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat-square" alt="Sass Badge">
<img src='https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat-square' alt='Vercel Badge'>

</div>

<br>

<div align="center">

---
 
 

### Created by **Andrew Vallejo**

<sub> **04.26.22** -
Hi there! I am creating this application to make developing cover letters as easy as possible. Many would argue that it would take me more time to complete this application than it would simply `CMD+F` and search & replace each occurrence of that word. That may be true to an extent, but this is dependent on how careful you are at editing. The tedious repetition of this task throughout many cover letters increases the likelihood of having a human error; therefore, sending a cover letter with incorrect roles and company names is high. I hope this application instills confidence in job seekers when updating their Cover Letters and convinces the recruiter that the job seeker wrote this letter uniquely just for them!
</sub>

---

Follow me on [Linkedin](https://www.linkedin.com/in/andrewvallejo/)!

Or look at more of my work on [Github](https://www.github.com/andrewvallejo)

</div>
