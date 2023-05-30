import { testMushroom } from "../util/data";

class AddNewSpeciesPage {

   navigate() {
      cy.visit("/new");
   }

   get archiveMushroomAsAdminButton() {
      return cy.get("[data-test='Archive mushroom']");
   }

   get mushroomNameInput() {
      return cy.get("[data-test='Mushroom Name']");
   }
   get originInput() {
      return cy.get("[data-test='Origin']");
   }
   get imageURLInput() {
      return cy.get("[data-test='Image URL']");
   }
   get descriptionInput() {
      return cy.get("[data-test='Description']");
   }

   get spawnRunInputs() {
      return cy.get("#SpawnRun > div > div > div > div > input");
   }
   get pinningInputs() {
      return cy.get("#Pinning > div > div > div > div > input");
   }
   get fruitingInputs() {
      return cy.get("#Fruiting > div > div > div > div > input");
   }

   get spawnRunTempMinInput() {
      return this.spawnRunInputs.eq(0);
   }
   get spawnRunTempMaxInput() {
      return this.spawnRunInputs.eq(1);
   }
   get spawnRunHumidityMinInput() {
      return this.spawnRunInputs.eq(2);
   }
   get spawnRunHumidityMaxInput() {
      return this.spawnRunInputs.eq(3);
   }
   get spawnRunCo2MinInput() {
      return this.spawnRunInputs.eq(4);
   }
   get spawnRunCo2MaxInput() {
      return this.spawnRunInputs.eq(5);
   }
   get spawnRunLightMinInput() {
      return this.spawnRunInputs.eq(6);
   }
   get spawnRunLightMaxInput() {
      return this.spawnRunInputs.eq(7);
   }

   get pinningTempMinInput() {
      return this.pinningInputs.eq(0);
   }
   get pinningTempMaxInput() {
      return this.pinningInputs.eq(1);
   }
   get pinningHumidityMinInput() {
      return this.pinningInputs.eq(2);
   }
   get pinningHumidityMaxInput() {
      return this.pinningInputs.eq(3);
   }
   get pinningCo2MinInput() {
      return this.pinningInputs.eq(4);
   }
   get pinningCo2MaxInput() {
      return this.pinningInputs.eq(5);
   }
   get pinningLightMinInput() {
      return this.pinningInputs.eq(6);
   }
   get pinningLightMaxInput() {
      return this.pinningInputs.eq(7);
   }

   get fruitingTempMinInput() {
      return this.fruitingInputs.eq(0);
   }
   get fruitingTempMaxInput() {
      return this.fruitingInputs.eq(1);
   }
   get fruitingHumidityMinInput() {
      return this.fruitingInputs.eq(2);
   }
   get fruitingHumidityMaxInput() {
      return this.fruitingInputs.eq(3);
   }
   get fruitingCo2MinInput() {
      return this.fruitingInputs.eq(4);
   }
   get fruitingCo2MaxInput() {
      return this.fruitingInputs.eq(5);
   }
   get fruitingLightMinInput() {
      return this.fruitingInputs.eq(6);
   }
   get fruitingLightMaxInput() {
      return this.fruitingInputs.eq(7);
   }

   get addMushroomButton() {
      return cy.get("#add-mushroom-btn");
   }

   get pageContainer() {
      return cy.get(".cont");
   }

   get pageTitle() {
      return cy.get("#new-species-title");
   }

   get inputRow() {
      return cy.get(".ans-inputs-row");
   }

   get phasesCards() {
      return cy.get(".phases");
   }

   get saveChangesButton() {
      return cy.get("#save-changes-btn");
   }

   changeMushroomName(newName) {
      this.mushroomNameInput.clear();
      this.mushroomNameInput.type(newName);
      this.saveChangesButton.click();
      cy.wait(2000);
   }

   changeMushroomOrigin(newOrigin) {
      this.originInput.clear();
      const newOriginString = newOrigin + "";
      this.originInput.type(newOriginString);
      this.saveChangesButton.click();
      cy.wait(2000);
   }

   changeMushroomDescription(newDescription) {
      this.descriptionInput.clear();
      this.descriptionInput.type(newDescription);
      this.saveChangesButton.click();
      cy.wait(2000);
   }

   changeMushroomImgURL(newImgURL) {
      this.imageURLInput.clear();
      this.imageURLInput.type(newImgURL);
      this.saveChangesButton.click();
      cy.wait(2000);
   }

   checkThatPageLoads() {
      this.pageContainer.should("exist");
      this.pageTitle.should("exist");
      this.inputRow.should("exist");
      this.phasesCards.should("exist");
      this.addMushroomButton.should("exist");
   }

   checkTextFieldsExist() {
      this.mushroomNameInput.should("exist");
      this.originInput.should("exist");
      this.imageURLInput.should("exist");
      this.descriptionInput.should("exist");
   }

   checkSpawnRunFieldsExist() {
      this.spawnRunTempMinInput.should("exist");
      this.spawnRunTempMaxInput.should("exist");
      this.spawnRunHumidityMinInput.should("exist");
      this.spawnRunHumidityMaxInput.should("exist");
      this.spawnRunCo2MinInput.should("exist");
      this.spawnRunCo2MaxInput.should("exist");
      this.spawnRunLightMinInput.should("exist");
      this.spawnRunLightMaxInput.should("exist");
   }

   checkPinningFieldsExist() {
      this.pinningTempMinInput.should("exist");
      this.pinningTempMaxInput.should("exist");
      this.pinningHumidityMinInput.should("exist");
      this.pinningHumidityMaxInput.should("exist");
      this.pinningCo2MinInput.should("exist");
      this.pinningCo2MaxInput.should("exist");
      this.pinningLightMinInput.should("exist");
      this.pinningLightMaxInput.should("exist");
   }

   checkFruitingFieldsExist() {
      this.pinningTempMinInput.should("exist");
      this.pinningTempMaxInput.should("exist");
      this.pinningHumidityMinInput.should("exist");
      this.pinningHumidityMaxInput.should("exist");
      this.pinningCo2MinInput.should("exist");
      this.pinningCo2MaxInput.should("exist");
      this.pinningLightMinInput.should("exist");
      this.pinningLightMaxInput.should("exist");
   }

   addTestSpecies() {
      this.fillOutTextFields();
      this.fillOutSpawnRunFields();
      this.fillOutPinningFields();
      this.fillOutFruitingFields();
      this.addMushroomButton.click();
   }

   fillOutTextFields() {
      this.mushroomNameInput.type(testMushroom.name);
      this.originInput.type(testMushroom.origin);
      this.imageURLInput.type(testMushroom.imageUrl);
      this.descriptionInput.type(testMushroom.description);
   }

   fillOutSpawnRunFields() {
      const conditions = testMushroom.idealConditionCreationDtos[0];
      this.spawnRunTempMinInput.type(conditions.tempLow);
      this.spawnRunTempMaxInput.type(conditions.tempHigh);
      this.spawnRunHumidityMinInput.type(conditions.humidityHigh);
      this.spawnRunHumidityMaxInput.type(conditions.humidityLow);
      this.spawnRunCo2MinInput.type(conditions.co2Low);
      this.spawnRunCo2MaxInput.type(conditions.co2High);
      this.spawnRunLightMinInput.type(conditions.lightLow);
      this.spawnRunLightMaxInput.type(conditions.lightHigh);
   }

   fillOutPinningFields() {
      const conditions = testMushroom.idealConditionCreationDtos[1];
      this.pinningTempMinInput.type(conditions.tempLow);
      this.pinningTempMaxInput.type(conditions.tempHigh);
      this.pinningHumidityMinInput.type(conditions.humidityHigh);
      this.pinningHumidityMaxInput.type(conditions.humidityLow);
      this.pinningCo2MinInput.type(conditions.co2Low);
      this.pinningCo2MaxInput.type(conditions.co2High);
      this.pinningLightMinInput.type(conditions.lightLow);
      this.pinningLightMaxInput.type(conditions.lightHigh);
   }

   fillOutFruitingFields() {
      const conditions = testMushroom.idealConditionCreationDtos[2];
      this.fruitingTempMinInput.type(conditions.tempLow);
      this.fruitingTempMaxInput.type(conditions.tempHigh);
      this.fruitingHumidityMinInput.type(conditions.humidityHigh);
      this.fruitingHumidityMaxInput.type(conditions.humidityLow);
      this.fruitingCo2MinInput.type(conditions.co2Low);
      this.fruitingCo2MaxInput.type(conditions.co2High);
      this.fruitingLightMinInput.type(conditions.lightLow);
      this.fruitingLightMaxInput.type(conditions.lightHigh);
   }
}

export default AddNewSpeciesPage

