import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { A } from '@ember/array';

export default Route.extend({

  model() {
    return hash({
      timetable: this.store.findAll('operation-timetable').then((data) => {
        let date = new Date();
        let month = date.getMonth();
        
        data.forEach(function(element) {
          if (parseInt(element.get('id')) === month) {
            element.set('currentMonth', true);
          }
        });

        return data;
      }),
      operationalMembers: this.store.findAll('member').then((members) => {
        return members.filter(function(member/*, index, array*/) {
          if (member.get('operationsDepartment.member')) {
            return true;
          }
          return false;
        }).sortBy('firstName');
      }),
      operationalMembersCount: this.store.findAll('member').then((members) => {
        let list = members.filter(function(member/*, index, array*/) {
          if (member.get('operationsDepartment.member')) {
            return true;
          }
          return false;
        });
        return list.get('length');
      }),
      commiteeMembers: this.store.findAll('member').then((members) => {
        let list = A();
        
        let fireChiefList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "fireChief") {
                fireChiefList.push({ 
                  member: member,
                  job: "fireChief"
                });
              }
            });
          }
        });
        list.push(fireChiefList);
        
        let deputyFireChiefList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "deputyFireChief") {
                deputyFireChiefList.push({ 
                  member: member,
                  job: "deputyFireChief"
                });
              }
            });
          }
        });
        list.push(deputyFireChiefList);
        
        let youthOfficerList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "youthOfficer") {
                youthOfficerList.push({ 
                  member: member,
                  job: "youthOfficer"
                });
              }
            });
          }
        });
        list.push(youthOfficerList);
        
        let childrenOfficerList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "childrenOfficer") {
                childrenOfficerList.push({ 
                  member: member,
                  job: "childrenOfficer"
                });
              }
            });
          }
        });
        list.push(childrenOfficerList);
        
        let equipmentOfficerList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "equipmentOfficer") {
                equipmentOfficerList.push({ 
                  member: member,
                  job: "equipmentOfficer"
                });
              }
            });
          }
        });
        list.push(equipmentOfficerList);
        
        let assessorList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "assessor") {
                assessorList.push({ 
                  member: member,
                  job: "assessor"
                });
              }
            });
          }
        });
        list.push(assessorList);
        
        let representativeHonorDepartmentList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "representativeHonorDepartment") {
                representativeHonorDepartmentList.push({ 
                  member: member,
                  job: "representativeHonorDepartment"
                });
              }
            });
          }
        });
        list.push(representativeHonorDepartmentList);
        
        let safetyOfficerList = A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "safetyOfficer") {
                safetyOfficerList.push({ 
                  member: member,
                  job: "safetyOfficer"
                });
              }
            });
          }
        });
        list.push(safetyOfficerList);
        
        return list;
      }),
      headerSlides: [
        {
          img: '/img/main-1.jpg',
          headline: 'Sei dabei!',
          text: 'Mach mit im Förderverein der freiwilligen Feuerwehr Erfurt-Molsdorf.'
        },
        {
          img: '/img/main-2.jpg',
          headline: 'Unsere Jugend',
          text: 'Lerne alles rund um die Feuerwehr.'
        },
        {
          img: '/img/main-3.jpg',
          headline: 'Ehrenabteilung',
          text: 'Einen wehrtvoller Beitrag leisten.'
        },
        {
          img: '/img/main-4.jpg',
          headline: 'Einsatzabteilung',
          text: 'Gemeinsam für euch.'
        }
      ]
    });
  },

  beforeModel() {
    this.transitionTo('operation.members');
  }

});
