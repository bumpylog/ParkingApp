function AppViewModel() {
    var self = this;
    this.firstName = "Bert";
    this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
