https://git.generalassemb.ly/ira/SEIR-FLEX-123/tree/master/projects/project_4
#  Calendar Journal
A web app that lets you save journal entries and photos to a calendar back end

## How Does it work
### Back End
#### A postgresql DB built using Rails
Repo: https://github.com/glicksauce/calendar_app_api  
Heroku: 

#### Schema:
![](/public/current_schema.png)
Two tables in a one-to-many relationship. One calendar can have many photos. Notice the primary key of calendar is the date,  not Id. This makes it easy to associate dates of a photo with the calendar(date). See below for disadvantages

#### Access:  
Cors Policy: 

---
### Front end
#### Built using React
Repo: https://github.com/glicksauce/calendar_app_client 
Heroku: 

#### Structure:


#### NPM Packages
##### react-calendar: https://www.npmjs.com/package/react-calendar
- used to render a calendar

---
### Improvements
Backend. Need better schema to accomodate adding in multiple users:

