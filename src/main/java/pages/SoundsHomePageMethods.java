package pages;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import locators.SoundsHomePageLocators;

public class SoundsHomePageMethods {

	WebDriver driver;
	SoundsHomePageLocators soundsHomePageLocators;
	WebDriverWait wait;
	
	public SoundsHomePageMethods(WebDriver driver){
		this.driver = driver;
		soundsHomePageLocators = new SoundsHomePageLocators(this.driver);
		wait = new WebDriverWait(this.driver, 10);
	}
	
	public void validateSoundsHomePage(){
		wait.until(ExpectedConditions.visibilityOf(soundsHomePageLocators.soundsHomePageLogo));
		boolean homePageLogo = soundsHomePageLocators.soundsHomePageLogo.isDisplayed();
		assertTrue(homePageLogo);
	}
	
	public void clickHomeButton(){
		soundsHomePageLocators.soundsHomePageButton.click();
	}
	
	public void validateRadio1(){
		boolean radio1 = soundsHomePageLocators.radio1.isDisplayed();
		assertTrue(radio1);
	}
	
	public void validateRadio2(){
		boolean radio2 = soundsHomePageLocators.radio1.isDisplayed();
		assertTrue(radio2);
	}
	
	public void clickViewAllStationsLink(){
		soundsHomePageLocators.viewAllStationLink.get(0).click();
	}
	
	public void clickHipHopCategory(){
		soundsHomePageLocators.hipHopCategory.click();
	}
	
	public void validateCarousel(){
		boolean carouselButton = soundsHomePageLocators.carousel.isDisplayed();
		assertTrue(carouselButton);
	}
	
	public void clickRightNavigationArrowOnLiveListen(){
		soundsHomePageLocators.rightNavigationButton.click();
	}
}
