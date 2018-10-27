import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr("string"),
    firstName: DS.attr("string"),
    lastName: DS.attr("string"),
    
    board: DS.attr("boolean"),
    boardChairman: DS.attr('boolean'),
    deputyBoardChairman: DS.attr('boolean'),
    treasurer: DS.attr('boolean'),
    secretary: DS.attr('boolean'),
    assessor: DS.attr('boolean'),
    
    operationsDepartment: DS.attr(),
    youthDepartment: DS.attr(),
    childrenDepartment: DS.attr(),

    honor: DS.attr('boolean'),
});
