package locators;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SoundsHomePageLocators {

	WebDriver driver;
	
	public SoundsHomePageLocators(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(this.driver, this) ;
	}
	
	@FindBy(xpath="//*[text()='Sounds home page']")
	public WebElement soundsHomePageLogo;
	
	@FindBy(xpath="//*[text()='Home' and @class='sc-c-sounds-nav__link-text gel-pica']")
	public WebElement soundsHomePageButton;
	
	@FindBy(xpath="//*[text()='Radio 1']")
	public WebElement radio1;
	
	@FindBy(xpath="//*[text()='Radio 2']")
	public WebElement radio2;
	
	@FindBy(xpath="//*[text()='View all Stations & Schedules']")
	public List<WebElement> viewAllStationLink;
	
	@FindBy(xpath="//*[text()='Hip Hop, RnB & Dancehall']")
	public WebElement hipHopCategory;
	
	@FindBy(xpath="//*[@class='sc-c-paddle__button sc-o-button gs-u-p-alt']")
	public WebElement rightNavigationButton;
	
	@FindBy(xpath="//*[contains(@class,'sc-c-paddle gs-u-display-none gs-u-display-block')]")
	public WebElement carousel;
}
