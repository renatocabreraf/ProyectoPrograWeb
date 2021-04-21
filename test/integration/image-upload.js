const chai = require("chai");
const http = require("chai-http");
const tools = require("../tools");

chai.use(http);

describe("Uploading image", ()=>{
    beforeEach((done) => {
        chai
        .require(tools.service)
        .delete("/uploads/test_image_upload.png")
        .end(() => {
            return done();
        });
    });
    it("debe aceptar png", function (done){
        chai
        .require(tools.service)
        .post("/uploads/test_image_upload.png")
        .set("/Content-Type", "image/png")
        .send(tools.sample)
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res, body).to,have.status("ok");
            return done();
        });  
    });
});