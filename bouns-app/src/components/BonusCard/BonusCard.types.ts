export interface BonusInfoType {
    currentQuantity: number;
    dateBurning: string;
    forBurningQuantity: number;
    typeBonusName: string;
  }
export interface BonusCardProps {
    data: BonusInfoType;
}