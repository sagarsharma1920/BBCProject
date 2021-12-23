$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bbcsoundsfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Sounds Homepage",
  "description": "",
  "id": "sounds-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2281418600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#AS a user"
    },
    {
      "line": 4,
      "value": "#I WANT to navigate to the Sounds page"
    },
    {
      "line": 5,
      "value": "#So THAT I can see and access all logos and content in one place"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 3879561300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Radio 1 and Radio 2 logos are displayed in the Listen Live module the Sounds Homepage",
  "description": "",
  "id": "sounds-homepage;radio-1-and-radio-2-logos-are-displayed-in-the-listen-live-module-the-sounds-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I select the ‘\tHome’ logo",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I am on the Sounds Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the Radio 1 logo",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can see the Radio 2 logo",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_select_the_Home_logo()"
});
formatter.result({
  "duration": 896853500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Sounds_Homepage()"
});
formatter.result({
  "duration": 121750500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "StepDefinition.i_can_see_the_Radio_logo(int)"
});
formatter.result({
  "duration": 133874500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "StepDefinition.i_can_see_the_Radio_logo(int)"
});
formatter.result({
  "duration": 120180000,
  "status": "passed"
});
formatter.after({
  "duration": 1559791800,
  "status": "passed"
});
formatter.before({
  "duration": 1532941700,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#AS a user"
    },
    {
      "line": 4,
      "value": "#I WANT to navigate to the Sounds page"
    },
    {
      "line": 5,
      "value": "#So THAT I can see and access all logos and content in one place"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 2443167800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify network station logos are displayed on the Stations page",
  "description": "",
  "id": "sounds-homepage;verify-network-station-logos-are-displayed-on-the-stations-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click the ‘View all Stations \u0026 Schedules’ link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I am on the ‘Stations’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I see 21 network station logos",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_click_the_View_all_Stations_Schedules_link()"
});
formatter.result({
  "duration": 96661800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Stations_page()"
});
formatter.result({
  "duration": 1033940700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 6
    }
  ],
  "location": "StepDefinition.i_see_network_station_logos(int)"
});
formatter.result({
  "duration": 18716600,
  "status": "passed"
});
formatter.after({
  "duration": 1007638100,
  "status": "passed"
});
formatter.before({
  "duration": 1582789500,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#AS a user"
    },
    {
      "line": 4,
      "value": "#I WANT to navigate to the Sounds page"
    },
    {
      "line": 5,
      "value": "#So THAT I can see and access all logos and content in one place"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 2795276100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Selecting the Hip Hop category from the Categories module on the Sounds Homepage",
  "description": "",
  "id": "sounds-homepage;selecting-the-hip-hop-category-from-the-categories-module-on-the-sounds-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I select Hip Hop, RnB \u0026 Dancehall Category",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I am on ‘Hip Hop, RnB \u0026 Dancehall’ Category page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I see Category page is sorted by popular",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_select_Hip_Hop_RnB_Dancehall_Category()"
});
formatter.result({
  "duration": 119224300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_Hip_Hop_RnB_Dancehall_Category_page()"
});
formatter.result({
  "duration": 1056496800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_see_Category_page_is_sorted_by_popular()"
});
formatter.result({
  "duration": 1235218000,
  "status": "passed"
});
formatter.after({
  "duration": 1064092300,
  "status": "passed"
});
formatter.before({
  "duration": 1548425300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#AS a user"
    },
    {
      "line": 4,
      "value": "#I WANT to navigate to the Sounds page"
    },
    {
      "line": 5,
      "value": "#So THAT I can see and access all logos and content in one place"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 2676703300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Listen live carousel takes user to the next available stations",
  "description": "",
  "id": "sounds-homepage;listen-live-carousel-takes-user-to-the-next-available-stations",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on the Sounds Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Validate carousel to see next available stations in the Listen Live module",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "validate navigation to all 21 stations using carousel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Sounds_Homepage()"
});
formatter.result({
  "duration": 82501100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_carousel_to_see_next_available_stations_in_the_Listen_Live_module()"
});
formatter.result({
  "duration": 60094400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 27
    }
  ],
  "location": "StepDefinition.validate_navigation_to_all_stations_using_carousel(int)"
});
formatter.result({
  "duration": 96056500,
  "status": "passed"
});
formatter.after({
  "duration": 1082070700,
  "status": "passed"
});
formatter.before({
  "duration": 1577463000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#AS a user"
    },
    {
      "line": 4,
      "value": "#I WANT to navigate to the Sounds page"
    },
    {
      "line": 5,
      "value": "#So THAT I can see and access all logos and content in one place"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 2232224200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Sounds logo takes user back to the Listen page",
  "description": "",
  "id": "sounds-homepage;sounds-logo-takes-user-back-to-the-listen-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I click the ‘View all Stations \u0026 Schedules’ link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I am on the ‘Stations’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click on Sounds Logo",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I am on the Sounds Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_click_the_View_all_Stations_Schedules_link()"
});
formatter.result({
  "duration": 108450600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Stations_page()"
});
formatter.result({
  "duration": 977357600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Sounds_Logo()"
});
formatter.result({
  "duration": 661748500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Sounds_Homepage()"
});
formatter.result({
  "duration": 70256400,
  "status": "passed"
});
formatter.after({
  "duration": 1053001900,
  "status": "passed"
});
formatter.before({
  "duration": 1567053300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#AS a user"
    },
    {
      "line": 4,
      "value": "#I WANT to navigate to the Sounds page"
    },
    {
      "line": 5,
      "value": "#So THAT I can see and access all logos and content in one place"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "duration": 2432390200,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Mouse over network logo on the Stations page shows an orange line underneath",
  "description": "",
  "id": "sounds-homepage;mouse-over-network-logo-on-the-stations-page-shows-an-orange-line-underneath",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I click the ‘View all Stations \u0026 Schedules’ link",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I am on the ‘Stations’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I mouse hover on radio stations network logo",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Validate Orange color line under radio stations logo",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_click_the_View_all_Stations_Schedules_link()"
});
formatter.result({
  "duration": 132600200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Stations_page()"
});
formatter.result({
  "duration": 942668800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_mouse_hover_on_radio_stations_network_logo()"
});
formatter.result({
  "duration": 16500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_Orange_color_line_under_radio_stations_logo()"
});
formatter.result({
  "duration": 261867600,
  "error_message": "java.lang.AssertionError: expected [rgba(168, 60, 18, 1)] but found [rgba(146, 54, 19, 1)]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat pages.StationsPageMethods.mouseHoverOnRadioNetworkLogosAndValidateOrangeLine(StationsPageMethods.java:59)\r\n\tat stepdefinition.StepDefinition.validate_Orange_color_line_under_radio_stations_logo(StepDefinition.java:105)\r\n\tat ✽.Then Validate Orange color line under radio stations logo(bbcsoundsfeature.feature:47)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1044623100,
  "status": "passed"
});
});