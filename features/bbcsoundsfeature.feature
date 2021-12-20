Feature: Sounds Homepage

	#AS a user
  #I WANT to navigate to the Sounds page
  #So THAT I can see and access all logos and content in one place

Background:
 Given I am on the BBC Sounds Homepage

@todo
Scenario: Radio 1 and Radio 2 logos are displayed in the Listen Live module the Sounds Homepage
  When I select the ‘	Home’ logo
  Then I am on the Sounds Homepage
  And I can see the Radio 1 logo 
  And I can see the Radio 2 logo 

@todo
Scenario: Verify network station logos are displayed on the Stations page
  When I click the ‘View all Stations & Schedules’ link 
  Then I am on the ‘Stations’ page
  And I see 21 network station logos

@todo
Scenario: Selecting the Hip Hop category from the Categories module on the Sounds Homepage
  When I select Hip Hop, RnB & Dancehall Category
  Then I am on ‘Hip Hop, RnB & Dancehall’ Category page
  And I see Category page is sorted by popular
  
@todo
Scenario: Listen live carousel takes user to the next available stations
	When I am on the Sounds Homepage
	Then Validate carousel to see next available stations in the Listen Live module
	And validate navigation to all 21 stations using carousel

@todo	
Scenario: Sounds logo takes user back to the Listen page
	When I click the ‘View all Stations & Schedules’ link 
  Then I am on the ‘Stations’ page
  When I click on Sounds Logo
  Then I am on the Sounds Homepage

@todo  
Scenario: Mouse over network logo on the Stations page shows an orange line underneath
	When I click the ‘View all Stations & Schedules’ link 
  Then I am on the ‘Stations’ page
  When I mouse hover on radio stations network logo
  Then Validate Orange color line under radio stations logo
  
