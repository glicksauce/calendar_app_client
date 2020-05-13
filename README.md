https://git.generalassemb.ly/ira/SEIR-FLEX-123/tree/master/projects/project_4
#  Calendar Journal
A web app that lets you save journal entries and photos to a calendar back end

## How Does it work
### Back End
#### A postgresql DB built using Rails
Repo: https://github.com/glicksauce/calendar_app_api  
Heroku: https://calendar-journal-api.herokuapp.com/

#### Schema:
![](/public/current_schema.PNG)  
Two tables in a one-to-many relationship. One calendar can have many photos. Notice the primary key of calendar is the date,  not Id. This makes it easy to associate dates of a photo with the calendar(date). See below for disadvantages

#### Access:  
Cors Policy: Setup environmental variables to restrict CORS access when not working locally:  
![](/public/cors_env.png)
  
Dev setup:  
![](/public/cors_backend.png)  

Production:  
![](/public/cors_frontend.png)  

---
### Front end
#### Built using React
Repo: https://github.com/glicksauce/calendar_app_client 
Heroku: https://calendar-journal-client.herokuapp.com/  

#### Structure:


#### Dependencies
##### react-calendar: https://www.npmjs.com/package/react-calendar
- used to render a calendar element so user can select date

---
### Future Improvements
Backend. Has some difficulties to overcome
![](/public/current_schema_problems.PNG)


Need better schema to accomodate adding in multiple users:
![](/public/improved_schema.PNG)  

integrate New York Times API to auto populate each date with front page headlines/photos of that date
