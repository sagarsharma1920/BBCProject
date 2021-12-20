package pages;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;
import org.junit.rules.Timeout;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import locators.SoundsHomePageLocators;
import locators.StationsPageLocators;;

public class StationsPageMethods {

	WebDriver driver;
	StationsPageLocators stationPageLocators;
	SoundsHomePageLocators soundsHomePageLocators;
	WebDriverWait wait;
	
	public StationsPageMethods(WebDriver driver){
		this.driver = driver;
		stationPageLocators = new StationsPageLocators(this.driver);
		soundsHomePageLocators = new SoundsHomePageLocators(this.driver);
		wait = new WebDriverWait(this.driver, 10);
	}
	
	public void validateStationsPageHeader(){
		wait.until(ExpectedConditions.visibilityOf(stationPageLocators.stationLable));
		boolean stationHeader = stationPageLocators.stationLable.isDisplayed();
		assertTrue(stationHeader);
	}
	
	public void validateNumberOfRadioStations(){
		int stationsNumber = stationPageLocators.stationsList.size();
		if(stationsNumber==21){
			assertTrue(true);
		}
		else{
			assertTrue(false);
		}
	}
	
	public void clickSoundsHomePageLogo(){
		((JavascriptExecutor)this.driver).executeScript("arguments[0].click();",soundsHomePageLocators.soundsHomePageLogo);
	}
	
	public void mouseHoverOnRadioNetworkLogosAndValidateOrangeLine(){
		for(int i=0; i < stationPageLocators.stationsList.size(); i++){
			Actions action = new Actions(driver);
			action.moveToElement(stationPageLocators.stationsList.get(i)).perform();
			driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
			String undelineColor = stationPageLocators.stationsList.get(i).getCssValue("color");
			assertEquals(undelineColor, "rgba(168, 60, 18, 1)");
		}
	}
}
