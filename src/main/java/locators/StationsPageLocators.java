package locators;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StationsPageLocators {
	WebDriver driver;
	
	public StationsPageLocators(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(this.driver, this) ;
	}
	
	@FindBy(xpath="//*[text()='Stations']")
	public WebElement stationLable;
	
	@FindBy(xpath="//*[contains(@class,'sc-o-link__text gel-great-primer-bold')]")
	public List<WebElement> stationsList;
}
