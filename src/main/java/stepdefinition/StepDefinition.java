package stepdefinition;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.*;
import utilities.DriverSetup;

public class StepDefinition {

	WebDriver driver;
	String bbcURL = "http://www.bbc.co.uk/sounds";
	HipHopCategoryPageMethods hipHopCategoryPage;
	SoundsHomePageMethods soundsHomePage;
	StationsPageMethods stationPage;
	
	@Before
	public void openBrowser(){
		System.setProperty("webdriver.chrome.driver", "D:\\Sagar\\Sagar Software\\chromedriver_win32\\chromedriver.exe");
		this.driver = DriverSetup.setup(this.driver);
		hipHopCategoryPage = new HipHopCategoryPageMethods(this.driver);
		soundsHomePage = new SoundsHomePageMethods(this.driver);
		stationPage = new StationsPageMethods(this.driver);
	}
	
	@Given("^I am on the BBC Sounds Homepage$")
	public void i_am_on_the_BBC_Sounds_Homepage(){
		driver.get(bbcURL);
		soundsHomePage.validateSoundsHomePage();
	}

	@When("^I select the ‘	Home’ logo$")
	public void i_select_the_Home_logo(){
		soundsHomePage.clickHomeButton();
	}

	@Then("^I am on the Sounds Homepage$")
	public void i_am_on_the_Sounds_Homepage(){
		soundsHomePage.validateSoundsHomePage();
	}

	@Then("^I can see the Radio (\\d+) logo$")
	public void i_can_see_the_Radio_logo(int arg1){
		soundsHomePage.validateRadio1();
		soundsHomePage.validateRadio2();
	}

	@When("^I click the ‘View all Stations & Schedules’ link$")
	public void i_click_the_View_all_Stations_Schedules_link(){
		soundsHomePage.clickViewAllStationsLink();
	}

	@Then("^I am on the ‘Stations’ page$")
	public void i_am_on_the_Stations_page(){
		stationPage.validateStationsPageHeader();
	}

	@Then("^I see (\\d+) network station logos$")
	public void i_see_network_station_logos(int arg1){
		stationPage.validateNumberOfRadioStations();
	}

	@When("^I select Hip Hop, RnB & Dancehall Category$")
	public void i_select_Hip_Hop_RnB_Dancehall_Category(){
		soundsHomePage.clickHipHopCategory();
	}

	@Then("^I am on ‘Hip Hop, RnB & Dancehall’ Category page$")
	public void i_am_on_Hip_Hop_RnB_Dancehall_Category_page(){
		hipHopCategoryPage.validateHipHopCategoryHeader();
	}

	@Then("^I see Category page is sorted by popular$")
	public void i_see_Category_page_is_sorted_by_popular(){
		hipHopCategoryPage.clickViewAllLink();
		hipHopCategoryPage.validateSortTypePopular();
	}
	
	@Then("^Validate carousel to see next available stations in the Listen Live module$")
	public void validate_carousel_to_see_next_available_stations_in_the_Listen_Live_module() {
		soundsHomePage.validateCarousel();
	}

	@Then("^validate navigation to all (\\d+) stations using carousel$")
	public void validate_navigation_to_all_stations_using_carousel(int arg1){
		soundsHomePage.clickRightNavigationArrowOnLiveListen();
	}

	@When("^I click on Sounds Logo$")
	public void i_click_on_Sounds_Logo(){
		stationPage.clickSoundsHomePageLogo();
	}

	@When("^I mouse hover on radio stations network logo$")
	public void i_mouse_hover_on_radio_stations_network_logo(){
		
	}
	
	@Then("^Validate Orange color line under radio stations logo$")
	public void validate_Orange_color_line_under_radio_stations_logo(){
		stationPage.mouseHoverOnRadioNetworkLogosAndValidateOrangeLine();
	}
	
	@After
	public void closeBrowserAndDriver(){
		this.driver.quit();
	}
}
