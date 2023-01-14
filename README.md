# notes_and_quotes 

ReadMe - GA Project Four: Full stack app - 4-7 days

Description

I created this web app as my fourth project for General Assembly’s software engineering immersive course. The brief was to build a full stack application with CRUD functionality, integrating learning from the final two weeks of the course, including JavaScript/REACT, Bootstrap, and more. This included creating an API, which seeded information to the site, and designing a front end interface with a well thought out user journey.

This was a solo project, and I worked independently over seven days. True build time turned out to be shorter (four days), due to a technical issue with my machine early on. Building this app allowed me to gain experience working independently on a full stack application with Django databases, Python and many other technologies, which I will detail below. I will discuss the process, results, and key takeaways below too.

Deployment link: https://notes-and-quotes.herokuapp.com/ 

To access the final web app, please follow the link above. 

Timeframe & Working Team

I worked alone, and spent four days building this project (due to time lost after a technical issue on my machine).

Technologies Used

JavaScript (ES6)
HTML5
CSS3
React.js
Django
Axios
Git
GitHub
Insomnia
TablePlus



Brief

The project brief set out necessary features the final app needed to include to serve as a minimum viable product (MVP).

I’ve included the brief below:

 **Build a full-stack application** by making your own backend and your own front-end
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.
 

Planning

Due to the tight deadline and the complexity of technologies involved, which were still very new to me at the time, planning was pivotal. I made use of a trello board to manage specific tasks during the build phase and used a google doc for high level planning and 

![wireframe_p4](https://user-images.githubusercontent.com/113911812/212492946-21f3ce23-5c90-407d-bc54-19a73ca57b42.png)

jotting down ideas. I used Excalidraw to create wireframes too, to ensure that I had a clear idea of what each page would require before I started building, and to plan out how the site would look. This was important for streamlining the site’s aesthetic, and for managing my own ambitions, as working alone meant that I had to be more deliberate in balancing possibility with feasibility, and at times reign in more expansive ideas for the app and focus on what might be achievable. I’ve included an image above. Finally, and perhaps most importantly, I made use of GitHub for version control and backup. This 


![trello_p4](https://user-images.githubusercontent.com/113911812/212493359-389ab691-ede2-4022-922f-43978cb03a0d.png)

proved useful when I encountered technical difficulties - I might have lost more work (and time) had I not set up and pushed to GitHub from early on.


Build

I started by setting up the backend. I anticipated that this would be the most challenging part of the build, as I had more experience with the technologies that would be required for the front end. For the backend, I used a Django framework and Python to set up routes for users to add, delete and update text (‘notes’). I tested each route using Insomnia, which took longer than I had hoped, due to small bugs and syntax errors, such as in the screenshot below.

![p4_codesnippet](https://user-images.githubusercontent.com/113911812/212493411-d43d6030-504d-4b47-813e-fdaafe5c3b4a.png)

Some of these errors resulted from rushing - after running short on time in the previous project, I was keen to set up the front end soon as design would play an important role in this application, due to the theme of promoting optimism and peace of mind. It was disheartening to find that the backend was trickier than I had anticipated, but I kept in mind all that I was learning from the process. Working independently at times made it challenging to stay motivated throughout. I enjoyed the daily stand ups, during which fellow students shared their progress and challenges they had encountered.

The code snippet below shows the function for updating a single note, followed by the function for deleting a note. These functions were trickier but I was pleased when they worked.

#updating a single note
 def put(self, request, pk):
     note = self.get_note(pk)
     try:
       note_to_update = NoteSerializer(note, request.data, partial=True)
       if note_to_update.is_valid():
           note_to_update.save()
           return Response(note_to_update.data, status.HTTP_202_ACCEPTED)
       print(note_to_update.errors)
       return Response(note_to_update.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
     except Exception as e:
       return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
 
   #delete a single note
 
 def delete(self, _request, pk):
       note_to_delete = self.get_note(pk)
       try:
           note_to_delete.delete()
           return Response(status=status.HTTP_204_NO_CONTENT)
       except Exception as e:
           return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)


Once the backend was complete, I ran the create react app command to start working on the front end. After running this command, I was alarmed to find new files had appeared on my machine in an unexpected place. Initially I deleted them, assuming I’d run the command from the wrong place. However, my machine ran into errors, and VSCode became difficult to use. I tried to restore the deleted files but the system failures persisted. I lost days of work over the weekend as a result of this error. The effects reached beyond what was initially noticeable, and when I later ran commands, I found various programmes were no longer installed. This was the most challenging disruption I had encountered on a project so far, but I learned a lot from it. Not least that when uncertain, it is best not to delete files - even if they appear to be in the wrong place. 

![error_p4](https://user-images.githubusercontent.com/113911812/212493476-8262ff27-94a1-4b36-bd02-c03313d814c2.png)

Another consequence of this error was that I could not exit the shell when working on the backend. This proved frustrating, but I got around this by programming front end features using the terminal outside of VSCode as illustrated in the screenshot to the right. (The screenshot also shows one of the errors I encountered which resulted from deleting important files - ‘zsh: command not found’. Many of the commands I relied on and had used before no longer worked). Though this took getting used to, it shifted (and improved!) my understanding of how the terminal works, and of how the frontend and backend work together.

It was only at the end of the project that I was able to exit the shell, by adding in the final line in the code snippet below. During the build phase, I focused on working around challenges, which proved useful in getting an MVP set up with the tight deadline I had.

Code to exit the shell:
   "explorer.compactFolders": false,
   "workbench.iconTheme": "file-icons",
   "workbench.startupEditor": "none",
   "workbench.editorAssociations": {
     "*.zip": "default",
     "*.wav": "default"
   },
   "python.terminal.activateEnvironment": false
}

 

 I was really pleased with the final design for the front end, illustrated in the images below. I was also pleased to find that it did not take long to set this up, and that I had grown more confident in design e.g. for buttons, forms and images. I used Midjourney to generate images to illustrate the site. This created an aesthetic that felt expansive and artistic. I used lower case text throughout, to add to the relaxed, modern feel and to create a space that might be used like a personal notepad or journal.
 
 ![loginp4](https://user-images.githubusercontent.com/113911812/212493689-2d3afadb-9b6a-4ab5-967a-2c48b1d50c57.png)
![notes_p4](https://user-images.githubusercontent.com/113911812/212493690-e2c58d21-a0f2-42a6-862a-7821e35344a6.png)
![p4_screenshot](https://user-images.githubusercontent.com/113911812/212493691-bdb708bf-eccc-4d1d-8950-4618d30961be.png)
![share_notep4](https://user-images.githubusercontent.com/113911812/212493692-c4e0d31f-001b-41a1-9b88-3c45e0c274f6.png)

 
 
 
 
 
 
 
 
 Challenges
 
Technical issue on my machine - on day two I had an issue with my Mac, which cost a lot of time.
Working independently under pressure - the tight deadline meant that I felt a little rushed throughout. Working on a full stack app shone a light on the aspects of programming that I was least experienced in. Where working in a group allowed me to lean into my strengths and check in with collaborators for advice, working independently challenged me to make use of more online tutorials.
I was short on time so could not add in all the functionality that I would have liked to. Also, my code, though functional, could have been cleaner/more concise in places.

Wins

Design and styling - I was really pleased with the aesthetic I created.
Gained more experience in working independently
Gained more experience working with Python and Django.


Key Learnings/Takeaways

If uncertain, never delete files!
Ways of working around errors - e.g. using a separate terminal to run the frontend server.
The importance of taking breaks/finding ways to stay motivated if and when things go wrong.
The importance of starting out with a very simple MVP to avoid disappointment if and when things go wrong.

Bugs

It is currently possible for any user to edit any other user’s note (my work on the secure route is not yet complete)
Logout functionality is not yet set up - so I have left the site open to be viewed, without the requirement for authentication.

Future Improvements

I originally wanted to include comments, to allow users to discuss the ‘quotes’ which appear on their homepage, but I was short on time, and encountered errors when setting this functionality up on the backend. With more time I would have added this in, as well as complete authentication to make it possible to show which users have commented.
I originally wanted to make the landing page more dynamic, with quotes on a carousel. However, I did not have enough time to incorporate this feature. The site might feel more dynamic and engaging with a moving carousel of quotes.
I could expand on the ‘quotes’ side of the app by adding functionality for users to save their favourite quotes, or to ‘like’ or ‘upvote’ quotes. I could also seed a greater number of quotes and set them to refresh with new entries for each user daily.













