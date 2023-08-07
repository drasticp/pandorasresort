export class AppUtil {

    static debounce(context, func, wait) {
        if(func.timeoutId != undefined) window.clearTimeout(func.timeoutId);
        func.timeoutId = setTimeout(function() {
            func.apply(context);
        }, wait);
    };

    // handle errors in the response stream so they can be caught
    // otherwise 401,500 errors, etc don't catch
    // this works with the C# ErrorResponse result object
    // example:  .then(this.handleErrors)
    static handleErrors(res) {
        if (!res.ok) {
            return res.json().then(e => { throw Error(e.message); });
        } else { 
            return res; 
        }
    }

    static async getAccomodations() {
        return fetch(`/api/getaccomodations/`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async getMembers(propertyId) {
        return fetch(`/api/getmembers?propertyid=${propertyId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async getMemberships(propertyId) {
        return fetch(`/api/getmemberships?propertyid=${propertyId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async getUsers() {
        return fetch(`/api/getusers/`)
        .then(this.handleErrors)
        .then(res => res.json());
    }



    static async amenities() {
        return fetch(`/api/amenitieslist`)
        .then(res => res.json());
    }

    static cellReportsFetch(siteId) {
        return fetch(`/api/cellreportsfetch/${siteId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static imageSave(imagedata) {
        let obj = { data:imagedata };
        return fetch("/api/imagesave",{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(obj)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static cellReportAdd(report) {
        return fetch("/api/cellreportadd",{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(report)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static couponGet(code) {
        return fetch(`/api/couponget/${code}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async categoriesFetch(clubId) {
        return fetch(`/api/categoriesfetch/${clubId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async clubInfoFetch() {
        return fetch(`/api/getclubinfos`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async fetchReviews(siteId) {
        return fetch(`/api/getratingsandreviews?siteId=${siteId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async reviewDelete(siteId) {
        return fetch(`/api/reviewdelete?siteId=${siteId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async fetchPlan() {
        return fetch(`/api/getplan`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async filterSetFetch() {
        let json = localStorage.getItem("filterset");
        if(json != null) return JSON.parse(json);
        let clubs = await AppUtil.clubInfoFetch();
        let filterset =  { amenities: [], poiGroups: [], clubs: clubs.map(c => c.id) };
        return filterset; 
    }

    static async inviteCreate(email, planId) {
        return fetch(`/api/invitecreate?email=${email}&planId=${planId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async inviteDelete(id) {
        return fetch(`/api/invitedelete/${id}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async poiGroupAdd(group) {
        return fetch(`/api/poigroupadd`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(group)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async poiGroupUpdate(group) {
        return fetch(`/api/poigroupupdate`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(group)
        })
        .then(this.handleErrors)
        .then(res => res.json());    
    }

    static poiGroupDelete(id) {
        return new Promise((resolve, reject) => {
            fetch(`/api/poigroupdelete/${id}`)
            .then(res => res.json())
            .then(groups => resolve(groups));
        });
    }

    static poiImport(poiGroupId, file) {
        let formData = new FormData()
        formData.append('files', file)
        return fetch("/api/poiimport?poiGroupId="+poiGroupId, {
          method: 'POST',
          body: formData
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static poiShareDelete(id) {
        return fetch(`/api/poiShareDelete/${id}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static poiShareAdd(id, email) {
        return fetch(`/api/poiShareAdd/${id}/${email}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static poiDelete(id) {
        return fetch(`/api/poiDelete/${id}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static poiAdd(poi) {
        return fetch(`/api/addpoi`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(poi)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static poiUpdate(poi) {
        return fetch("/api/poiupdate", {
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(poi)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static poiGroupsFetch() {
        return  fetch(`/api/poigroupsfetch`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static poisFetch(filterset) {
        return fetch(`/api/poisfetch`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(filterset)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static planDelete(planId) {
        return fetch(`/api/deleteplan?planid=${planId}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    /* deprecated */
    static planCreate(name, home) {
        let value = home == null ? "" : encodeURIComponent(home);
        return fetch(`/api/plancreate?name=${encodeURIComponent(name)}&home=${value}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static planUpsert(plan) { 
        return fetch('/api/planupsert',{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(plan)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static async sitesFetch(filterset) {
        return fetch(`/api/sitesfetch`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(filterset)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static fetchSite(siteId) {
        return fetch(`/api/getsite/${siteId}`)
        .then(res => res.json());
    }

    static siteFetchForEdit(siteId) {
        return fetch(`/api/sitefetchforedit/${siteId}`)
        .then(res => res.json());        
    }

    static siteUpdate(site) {
        return fetch(`/api/siteupdate`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(site)
        })
        .then(res => res.json());
    }

    static siteAdd(site) {
        return fetch(`/api/siteadd`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(site)
        })
        .then(res => res.json());
    }

    static siteClaim(siteId) {
        return fetch(`/api/siteclaim/${siteId}`)
        .then(res => res.json());
    }

    // returns plan
    static staySave(stay) {
        return fetch("/api/savestay",{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(stay)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static clubsGet() {
        return fetch("/api/getclubinfos")
        .then(res => res.json());
    }

    static changePlan(plan) {
        return new Promise((resolve, reject) => {
            fetch(`/api/changeplan?planid=${plan.id}`)
            .then(res => res.json())
            .then(res => resolve(res));
        });
    }

    // returns receipt
    static subscribe(creditcard, expyr, expmo, cvc, couponCode) {
        return fetch(`/api/subscribe?number=${creditcard}&expYear=${expyr}&expMonth=${expmo}&cvc=${cvc}&couponCode=${couponCode}`)
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static unsubscribe() {
        return fetch(`/api/unsubscribe`)
        .then(this.handleErrors)
        .then(res => res.json());
    }


    static userRegister(user) {
        return fetch(`/api/userregister`,{
            method: 'post', 
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(user)
        })
        .then(this.handleErrors)
        .then(res => res.json());
    }

    static dbOpen(dbName, version, upgradeFunc) {
        return new Promise((resolve, reject) => {
            console.log("db-open", dbName + " opening");
            let request = window.indexedDB.open(dbName, version);
            request.onerror = function(event) {
                console.log("db-open-error", dbName);
                reject(request.errorCode); // Do something with request.errorCode!
            };
            request.onsuccess = function(event) {
                console.log("db-open-success", dbName);
                resolve(event.target.result); // Do something with request.result!
            };
            request.onupgradeneeded = function(event) {
                console.log("db-open-upgrade", dbName);
                upgradeFunc(event.target.result);
            };
            console.log("db request", request);
        });
    }

    static createStore(db, storeName, keyPath) {
        return new Promise((resolve, reject) => {
            console.log("db-store-create", storeName + " creating");
            var store = db.createObjectStore(storeName, { keyPath: keyPath });
            store.transaction.oncomplete = function(event) {
                console.log("db-store-create", storeName + " created");
                resolve(db);
            };
        });
    }

    static clearStore(db, storeName) {
        return new Promise((resolve, reject) => {
            console.log("db-clear", storeName + " clearing");
            let req = db.transaction([storeName], 'readwrite').objectStore(storeName).clear();
            req.onerror = function(e) {
                console.log("db-clear-error", e);
                reject(e);
            };
            req.onsuccess = function(e) {
                console.log("db-clear", storeName + " cleared");
                resolve(db);
            };
        });
    }

    static getAll(db, storeName) {
        return new Promise((resolve,reject) => {
            console.log("db-getall", storeName + " getting");
            let req = db.transaction([storeName], "readonly").objectStore(storeName).getAll();
            req.onerror = function(e) {
                console.log("db-getall-error", e);
                reject(e);
            };
            req.onsuccess = function(e) {
                console.log("db-getall", storeName + " got");
                resolve(req.result);
            };
        });
    }

    static insertBulk(db, storeName, items) {
        return new Promise((resolve, reject) => {
            console.log("db-insert", storeName + " inserting");
            let trans = db.transaction([storeName], "readwrite");
            trans.oncomplete = function(event) {
                console.log("db-insert-bulk", storeName + " all done");
                resolve(db);
            };
            trans.onerror = function(e) {
                console.log("db-insert-bulk-error", e.srcElement.transaction.error);
                reject(e.srcElement.transaction.error);
            };
            let objectStore = trans.objectStore(storeName);
            items.forEach(item => {
                objectStore.add(item);
            });
        });
    }
}