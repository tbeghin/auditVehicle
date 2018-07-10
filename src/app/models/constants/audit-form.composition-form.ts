export const AuditComposition: CompositionFormRow[] = [
  {
    row: [
      {
        id: 'agency',
        type: 'input',
        label: 'Agence :',
        class: 'col-6',
        name: 'agency',
        placeholder: 'Méricourt',
        formControlName: 'formInputAgency',
        pathValue: 'agency'
      },
      {
        id: 'sub-agency',
        type: 'input',
        label: 'Sous secteur :',
        class: 'col-6',
        name: 'sub-agency',
        placeholder: '430',
        formControlName: 'formInputSubAgency',
        pathValue: 'subAgency'
      }
    ]
  },
  {
    row: [
      {
        id: 'site',
        type: 'input',
        label: 'Site :',
        class: 'col-6',
        name: 'site',
        placeholder: 'Arena Stade Couvert',
        formControlName: 'formInputSite',
        pathValue: 'site'
      },
      {
        id: 'driver',
        type: 'input',
        label: 'Nom du conducteur :',
        class: 'col-6',
        name: 'agency',
        placeholder: 'Michel',
        formControlName: 'formInputDriver',
        pathValue: 'driver'
      }
    ]
  },
  {
    row: [
      {
        id: 'controler',
        type: 'input',
        label: 'Contrôle réalisé par :',
        class: 'col-6',
        name: 'controler',
        placeholder: 'Jacques',
        formControlName: 'formInputControler',
        pathValue: 'inspector'
      },
      {
        id: 'auditDate',
        type: 'date',
        label: '',
        class: 'col-6',
        name: 'auditDate',
        placeholder: 'Date de l\'audit',
        formControlName: 'formInputAuditDate',
        pathValue: 'auditDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'distance',
        type: 'number',
        label: 'Kilométrage :',
        class: 'col-6',
        name: 'distance',
        placeholder: '1000',
        formControlName: 'formInputDistance',
        pathValue: 'distance'
      },
      {
        id: 'plateNumber',
        type: 'input',
        label: 'Immatriculation :',
        class: 'col-6',
        name: 'plateNumber',
        placeholder: 'Immatriculation',
        formControlName: 'formInputPlateNumber',
        pathValue: 'plateNumber'
      }
    ]
  },
  {
    row: [
      {
        id: 'cleanliness',
        type: 'radio',
        label: 'Propreté extérieure :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'cleanliness',
        placeholder: '',
        formControlName: 'formRadioCleanliness',
        pathValue: 'cleanliness.value'
      },
      {
        id: 'cleanlinessComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'cleanlinessComment',
        placeholder: '',
        formControlName: 'formInputCleanliness',
        pathValue: 'cleanliness.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'bodyState',
        type: 'radio',
        label: 'Etat carosserie :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'bodyState',
        placeholder: '',
        formControlName: 'formRadioBodyState',
        pathValue: 'bodyState.value'
      },
      {
        id: 'bodyStateComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'bodyStateComment',
        placeholder: '',
        formControlName: 'formInputBodyState',
        pathValue: 'bodyState.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'arrangement',
        type: 'radio',
        label: 'Propreté intérieure/rangement :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'arrangement',
        placeholder: '',
        formControlName: 'formRadioArrangement',
        pathValue: 'arrangement.value'
      },
      {
        id: 'arrangementComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'arrangementComment',
        placeholder: '',
        formControlName: 'formInputArrangement',
        pathValue: 'arrangement.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'pneumaticState',
        type: 'radio',
        label: 'Etat des pneumatiques :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'pneumaticState',
        placeholder: '',
        formControlName: 'formRadioPneumaticState',
        pathValue: 'pneumaticState.value'
      },
      {
        id: 'pneumaticStateComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'pneumaticStateComment',
        placeholder: '',
        formControlName: 'formInputPneumaticState',
        pathValue: 'pneumaticState.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'lighting',
        type: 'radio',
        label: 'Eclairage :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'lighting',
        placeholder: '',
        formControlName: 'formRadioLighting',
        pathValue: 'lighting.value'
      },
      {
        id: 'lightingComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'lightingComment',
        placeholder: '',
        formControlName: 'formInputLighting',
        pathValue: 'lighting.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'wingMirror',
        type: 'radio',
        label: 'Retroviseurs :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'wingMirror',
        placeholder: '',
        formControlName: 'formRadioWingMirror',
        pathValue: 'wingMirror.value'
      },
      {
        id: 'wingMirrorComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'wingMirrorComment',
        placeholder: '',
        formControlName: 'formInputWingMirror',
        pathValue: 'wingMirror.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'windscreenWipers',
        type: 'radio',
        label: 'Essuie-glaces :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'windscreenWipers',
        placeholder: '',
        formControlName: 'formRadioWindscreenWipers',
        pathValue: 'windscreenWipers.value'
      },
      {
        id: 'windscreenWipersComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'windscreenWipersComment',
        placeholder: '',
        formControlName: 'formInputWindscreenWipers',
        pathValue: 'windscreenWipers.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'windshield',
        type: 'radio',
        label: 'Pare-brise :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'windshield',
        placeholder: '',
        formControlName: 'formRadioWindshield',
        pathValue: 'windshield.value'
      },
      {
        id: 'windshieldComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'windshieldComment',
        placeholder: '',
        formControlName: 'formInputWindshield',
        pathValue: 'windshield.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'insurance',
        type: 'radio',
        label: 'Vignette d\'assurance valide et en cours :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'insurance',
        placeholder: '',
        formControlName: 'formRadioInsurance',
        pathValue: 'insurance.value'
      },
      {
        id: 'insuranceComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'insuranceComment',
        placeholder: '',
        formControlName: 'formInputInsurance',
        pathValue: 'insurance.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'report',
        type: 'radio',
        label: 'Constat pré-rempli (tampon IDEX) :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'report',
        placeholder: '',
        formControlName: 'formRadioReport',
        pathValue: 'report.value'
      },
      {
        id: 'reportComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'reportComment',
        placeholder: '',
        formControlName: 'formInputReport',
        pathValue: 'report.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'logo',
        type: 'radio',
        label: 'Logos :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'logo',
        placeholder: '',
        formControlName: 'formRadioLogo',
        pathValue: 'logo.value'
      },
      {
        id: 'logoComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'logoComment',
        placeholder: '',
        formControlName: 'formInputLogo',
        pathValue: 'logo.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'vehiclePapers',
        type: 'radio',
        label: 'Papiers du véhicule :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'vehiclePapers',
        placeholder: '',
        formControlName: 'formRadioVehiclePapers',
        pathValue: 'vehiclePapers.value'
      },
      {
        id: 'vehiclePapersComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'vehiclePapersComment',
        placeholder: '',
        formControlName: 'formInputVehiclePapers',
        pathValue: 'vehiclePapers.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'vehicleBook',
        type: 'radio',
        label: 'Carnet d\'entretien :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'vehicleBook',
        placeholder: '',
        formControlName: 'formRadioVehicleBook',
        pathValue: 'vehicleBook.value'
      },
      {
        id: 'vehicleBookComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'vehicleBookComment',
        placeholder: '',
        formControlName: 'formInputVehicleBook',
        pathValue: 'vehicleBook.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'technicalRevision',
        type: 'radio',
        label: 'Révision technique :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'technicalRevision',
        placeholder: '',
        formControlName: 'formRadioTechnicalRevision',
        pathValue: 'technicalRevision.value'
      },
      {
        id: 'technicalRevisionComment',
        type: 'number',
        label: 'Kilométrage de la dernière révision :',
        class: 'col-4',
        name: 'technicalRevisionComment',
        placeholder: '1000',
        formControlName: 'formInputTechnicalRevision',
        pathValue: 'technicalRevision.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'lastCtTheo',
        type: 'date',
        label: '',
        class: 'col-6',
        name: 'lastCtTheo',
        placeholder: 'Date du dernier C.T. théorique',
        formControlName: 'formDateLastCtTheo',
        pathValue: 'lastCtTheoDate'
      },
      {
        id: 'lastCtRea',
        type: 'date',
        label: '',
        class: 'col-6',
        name: 'lastCtRea',
        placeholder: 'Date du dernier C.T. réalisé',
        formControlName: 'formDateLastCtRea',
        pathValue: 'lastCtReaDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'sticker',
        type: 'radio',
        label: 'Présence du sticker :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'sticker',
        placeholder: '',
        formControlName: 'formRadioSticker',
        pathValue: 'sticker.value'
      },
      {
        id: 'stickerComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'stickerComment',
        placeholder: '',
        formControlName: 'formInputSticker',
        pathValue: 'sticker.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'license',
        type: 'radio',
        label: 'Permis de conduire :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'license',
        placeholder: '',
        formControlName: 'formRadioLicense',
        pathValue: 'license.value'
      },
      {
        id: 'licenseComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'licenseComment',
        placeholder: '',
        formControlName: 'formInputLicense',
        pathValue: 'license.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'loadingVehicle',
        type: 'radio',
        label: 'Chargement du véhicule :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'loadingVehicle',
        placeholder: '',
        formControlName: 'formRadioLoadingVehicle',
        pathValue: 'loadingVehicle.value'
      },
      {
        id: 'loadingComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'loadingComment',
        placeholder: '',
        formControlName: 'formInputLoading',
        pathValue: 'loadingVehicle.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'tools',
        type: 'radio',
        label: 'Outillage du véhicule :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'tools',
        placeholder: '',
        formControlName: 'formRadioTools',
        pathValue: 'tools.value'
      },
      {
        id: 'toolsDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'toolsDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateToolsDate',
        pathValue: 'tools.date'
      }
    ]
  },
  {
    row: [
      {
        id: 'spareWheel',
        type: 'radio',
        label: 'Présence roue de secours :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'spareWheel',
        placeholder: '',
        formControlName: 'formRadioSpareWheel',
        pathValue: 'spareWheel.value'
      },
      {
        id: 'spareWheelDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'spareWheelDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateSpareWheelDate',
        pathValue: 'spareWheel.date'
      }
    ]
  },
  {
    row: [
      {
        id: 'cric',
        type: 'radio',
        label: 'Présence du cric :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'cric',
        placeholder: '',
        formControlName: 'formRadioCric',
        pathValue: 'cric.value'
      },
      {
        id: 'cricDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'cricDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateCricDate',
        pathValue: 'cric.date'
      }
    ]
  },
  {
    row: [
      {
        id: 'crank',
        type: 'radio',
        label: 'Présence manivelle :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'crank',
        placeholder: '',
        formControlName: 'formRadioCrank',
        pathValue: 'crank.value'
      },
      {
        id: 'crankDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'crankDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateCrankDate',
        pathValue: 'crank.date'
      }
    ]
  },
  {
    row: [
      {
        id: 'securityAccessory',
        type: 'radio',
        label: 'Gilet et triangle de sécurité :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'securityAccessory',
        placeholder: '',
        formControlName: 'formRadioSecurityAccessory',
        pathValue: 'securityAccessory.value'
      },
      {
        id: 'securityAccessoryDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'securityAccessoryDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateSecurityAccessoryDate',
        pathValue: 'securityAccessory.date'
      }
    ]
  },
  {
    row: [
      {
        id: 'extinguisher',
        type: 'radio',
        label: 'Extincteur vérifié annuellement :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Véhicule non équipé',
            value: false
          }
        ],
        name: 'extinguisher',
        placeholder: '',
        formControlName: 'formRadioExtinguisher',
        pathValue: 'extinguisher.value'
      },
      {
        id: 'extinguisherComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'extinguisherComment',
        placeholder: '',
        formControlName: 'formInputExtinguisher',
        pathValue: 'extinguisher.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'aidKit',
        type: 'radio',
        label: 'Trousse à pharmacie :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Véhicule non équipé',
            value: false
          }
        ],
        name: 'aidKit',
        placeholder: '',
        formControlName: 'formRadioAidKit',
        pathValue: 'aidKit.value'
      },
      {
        id: 'aidKitComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'aidKitComment',
        placeholder: '',
        formControlName: 'formInputAidKit',
        pathValue: 'aidKit.comment'
      }
    ]
  },
  {
    row: [
      {
        id: 'shocksOrStripes',
        type: 'textarea',
        label: 'Chocs ou Rayures :',
        class: 'col-12',
        name: 'shocksOrStripes',
        placeholder: '',
        formControlName: 'formInputshocksOrStripes',
        pathValue: 'shocksOrStripes'
      }
    ]
  },
  {
    row: [
      {
        id: 'observations',
        type: 'textarea',
        label: 'Observations :',
        class: 'col-12',
        name: 'observations',
        placeholder: '',
        formControlName: 'formInputObservations',
        pathValue: 'observations'
      }
    ]
  }
];

export class CompositionFormRow {
  row: CompositionForm[];
}

export class CompositionForm {
  id: string;
  type: string;
  class: string;
  label: string;
  name: string;
  placeholder: string;
  formControlName: string;
  button?: RadioButton[];
  pathValue: string;
}

export class RadioButton {
  label: string;
  value: any;
}
