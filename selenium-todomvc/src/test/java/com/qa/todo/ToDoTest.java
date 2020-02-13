package com.qa.todo;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class ToDoTest {
    String TODO_URL= "http://localhost:8888";
    WebDriver driver;

    @BeforeTest
    public void setup() {
        //setting the driver executable
        System.setProperty("webdriver.chrome.driver", "/Users/dekal//drivers/chromedriver");

        //Initiating your chromedriver
        driver = new ChromeDriver();
        // wait time
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        driver.get(TODO_URL);
    }

    @Test
    public void todoAddnewItemTest() {
        WebElement element = driver.findElement(By.className("new-todo"));
        element.sendKeys("Create to do note 1");
        element.sendKeys(Keys.RETURN);

        WebElement note = driver.findElement(By.className("todo-list"));
        List<WebElement> listNote = note.findElements(By.tagName("li"));

        Assert.assertEquals(listNote.size(), 1);

        WebElement noteLabel = listNote.get(0).findElement(By.tagName("label"));
        Assert.assertEquals(noteLabel.getText(), "Create to do note 1");
    }

    @AfterTest
    public void tearDown() {
        driver.quit();
    }
}
