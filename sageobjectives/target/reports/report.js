$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bbcsoundsfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Sounds Homepage",
  "description": "",
  "id": "sounds-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2063053000,
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
  "duration": 5758375400,
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
  "duration": 765518700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Sounds_Homepage()"
});
formatter.result({
  "duration": 70901600,
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
  "duration": 78074700,
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
  "duration": 60852900,
  "status": "passed"
});
formatter.after({
  "duration": 1334910600,
  "status": "passed"
});
formatter.before({
  "duration": 1303057000,
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
  "duration": 4030850600,
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
  "duration": 69157300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_Stations_page()"
});
formatter.result({
  "duration": 1213870100,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.testng.Assert.fail(Assert.java:74)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:346)\r\n\tat org.testng.Assert.assertTrue(Assert.java:29)\r\n\tat org.testng.Assert.assertFalse(Assert.java:46)\r\n\tat org.testng.Assert.assertFalse(Assert.java:54)\r\n\tat pages.SoundsHomePageMethods.validateSoundsHomePageNotVisible(SoundsHomePageMethods.java:55)\r\n\tat stepdefinition.StepDefinition.i_am_on_the_Stations_page(StepDefinition.java:60)\r\n\tat ✽.Then I am on the ‘Stations’ page(bbcsoundsfeature.feature:20)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 855271900,
  "status": "passed"
});
formatter.before({
  "duration": 1310631400,
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
  "duration": 7487112900,
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
  "duration": 65927600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_am_on_Hip_Hop_RnB_Dancehall_Category_page()"
});
formatter.result({
  "duration": 1745393900,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.testng.Assert.fail(Assert.java:74)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:346)\r\n\tat org.testng.Assert.assertTrue(Assert.java:29)\r\n\tat org.testng.Assert.assertFalse(Assert.java:46)\r\n\tat org.testng.Assert.assertFalse(Assert.java:54)\r\n\tat pages.SoundsHomePageMethods.validateSoundsHomePageNotVisible(SoundsHomePageMethods.java:55)\r\n\tat stepdefinition.StepDefinition.i_am_on_Hip_Hop_RnB_Dancehall_Category_page(StepDefinition.java:76)\r\n\tat ✽.Then I am on ‘Hip Hop, RnB \u0026 Dancehall’ Category page(bbcsoundsfeature.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.i_see_Category_page_is_sorted_by_popular()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1350303400,
  "status": "passed"
});
});